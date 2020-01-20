import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';
import Book, { connectToMongo } from './utils/mongo-connect';

export const insertBook = async (event, _context) => {

    await connectToMongo()

    var book = new Book({
        title: "foo",
        author: "bar"
    });

    await book.save((err: any) => {
        if (err)
            return {
                statusCode: 400,
                body: JSON.stringify({
                    error: err,
                }, null, 2),
            };
        else
            return {
                statusCode: 200,
                body: JSON.stringify({
                    data: book,
                }, null, 2)
            };
    });
}