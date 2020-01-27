import Book, { connectToMongo } from './utils/mongo-connect';

export const updateBook = async (event, context) => {
    context.callbackWaitsForEmptyEventLoop = false;

    await connectToMongo()

    try {
        const books = await Book.updateOne(
            { _id: event.pathParameters.id },
            { $set: JSON.parse(event.body) })

        return {
            statusCode: 200,
            body: JSON.stringify({
                data: books,
            }, null, 2)
        };
    }
    catch (err) {
        return {
            statusCode: 400,
            body: JSON.stringify({
                error: err,
            }, null, 2),
        }
    }

}
