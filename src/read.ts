import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';
import Book, { connectToMongo } from './utils/mongo-connect';

export const getAllBooks = async (event, _context, callback) => {
    
    console.log('before connect... ')
    await connectToMongo()
    console.log('after connect... ')

    await Book.find((err: any, books: any) => {

        console.log('got books', books)

        if (err)
            callback({
                statusCode: 400,
                body: JSON.stringify({
                    error: err,
                }, null, 2),
            });
        else
            callback(null, {
                statusCode: 200,
                body: JSON.stringify({
                    data: books,
                }, null, 2)
            });

    });

}