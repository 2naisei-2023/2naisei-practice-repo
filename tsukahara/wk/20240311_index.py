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
    # リクエストから"name"を取得
    name = event.get("name")
    
    # DynamoDBからデータを取得
    response = dynamodb.get_item(
        TableName=table_name,
        Key={
            'name': {'S': name}
        }
    )
    
    # DynamoDBからのレスポンスを整形
    item = response.get('Item')
    if item:
        # DynamoDBからのデータをJSON形式で返す
        return {
            'statusCode': 200,
            'body': json.dumps(item),
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*' # クロスオリジンリソース共有 (CORS) を許可する場合
            }
        }
    else:
        # 該当のデータが見つからない場合はエラーを返す
        return {
            'statusCode': 404,
            'body': json.dumps({'message': 'Data not found'}),
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*' # クロスオリジンリソース共有 (CORS) を許可する場合
            }
        }