const aws = require('aws-sdk'); //①テスト～
const dynamo = new aws.DynamoDB.DocumentClient(); //②

exports.handler = async (event) => {
    let res = await dynamoscan(event);
    return res;
}; //③

function dynamoscan(event) {
    return new Promise((resolve, reject) => { //⑤

        const params = {
            TableName: 'dish',
            KeyConditionExpression: '#id = :value', //①
            ExpressionAttributeNames: { //②
                "#id": "dish_id"
            },
            ExpressionAttributeValues: { //③
                ":value": Number(event.dishId)
            }
        };

        dynamo.scan(params, function(err, data) {
            if (err) {
                reject(err);
            }
            else {
                resolve(data.Items);
            }

        });
    });
}