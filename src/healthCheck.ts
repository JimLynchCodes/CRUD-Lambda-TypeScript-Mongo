// import { APIGatewayProxyHandler } from 'aws-lambda';
// import 'source-map-support/register';
// import Book, { connectToMongo } from './utils/mongo-connect';

export const healthCheck = async (event, _context, callback) => {

    return {
        statusCode: 200,
        body: JSON.stringify({
            data: 'CRUD-Lambda-TypeScript-Mongo Service Is Up & Running! 👍',
        }, null, 2),
    };

}