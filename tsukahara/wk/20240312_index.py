import json
import boto3
import os

# DynamoDBクライアントを作成
dynamodb = boto3.client('dynamodb')

def lambda_handler(event, context):
    # リクエストから"keyNumber"を取得
    PolNo = event.get("keyNumber")
    # DynamoDBからデータを検索
    response = dynamodb.query(
        TableName='shohin1-naisei-punch',
        KeyConditionExpression="PolNo = :polno",
        ExpressionAttributeValues={
            ":polno": {"S": str(PolNo)}
        }
    )
    
    # レスポンスの整形
    items = response.get('Items')
    if items:
        # データが見つかった場合
        return {
            'statusCode': 200,
            'body': json.dumps({'found': True, 'item': items[0]}),
            'headers': {
                'Content-Type': 'application/json'
            }
        }
    else:
        # データが見つからなかった場合
        return {
            'statusCode': 200,
            'body': json.dumps({'found': False}),
            'headers': {
                'Content-Type': 'application/json'
            }