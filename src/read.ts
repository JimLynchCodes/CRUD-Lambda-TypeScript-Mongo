import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';
import Book, { connectToMongo } from './utils/mongo-connect';

export const getAllBooks = async (event, context) => {
    context.callbackWaitsForEmptyEventLoop = false;
    console.log('before connect... ')
    await connectToMongo()
    console.log('after connect... ')

    await Book.find((err: any, books: any) => {

        console.log('got books', books)

        if (err)
            // callback(
            return {
                statusCode: 400,
                body: JSON.stringify({
                    error: err,
                }, null, 2),
            }
        // );
        else
            return {
                statusCode: 200,
                body: JSON.stringify({
                    data: books,
                }, null, 2)
            };

    });

    console.log('down here.')

    // await connection.close()


}