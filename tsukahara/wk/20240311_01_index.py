import json
import boto3
import os

# パラメーターストアからDynamoDBのテーブル名を取得
ssm = boto3.client('ssm')
parameter = ssm.get_parameter(Name='shohin1-naisei-DynamoDB', WithDecryption=False)
table_name = parameter['Parameter']['Value']

# DynamoDBクライアントを作成
dynamodb = boto3.client('dynamodb')

def lambda_handler(event, context):
    # リクエストから"keyNumber"を取得
    key_number = event.get("keyNumber")
    
    # DynamoDBからデータを検索
    response = dynamodb.get_item(
        TableName=table_name,
        Key={
            'keyNumber': {'S': key_number}
        }
    )
    
    # レスポンスの整形
    item = response.get('Item')
    if item:
        # データが見つかった場合
        return {
            'found': True
        }
    else:
        # データが見つからなかった場合
        return {
            'found': False
        }