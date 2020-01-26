import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';
import Book, { connectToMongo } from './utils/mongo-connect';

export const insertBook = async (event, _context) => {

    await connectToMongo()

    var book = new Book({
        title: "foola",
        author: "bar"
    });

    return new Promise(resolve => {


        book.save((err: any) => {


            resolve({
                statusCode: 200,
                body: JSON.stringify({
                    data: 'CRUD-Lambda-TypeScript-Mongo Service Is Up & Running! 👍',
                }, null, 2),
            });


            if (err)
                return {
                    statusCode: 400,
                    body: JSON.stringify({
                        error: err,
                    }, null, 2),
                };
            else {

                console.log('saved!')
                return {
                    statusCode: 200,
                    body: JSON.stringify({
                        data: "stuff!",
                    }, null, 2)
                };
            }
        })
    });
}