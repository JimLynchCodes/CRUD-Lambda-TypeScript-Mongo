import Book, { connectToMongo } from './utils/mongo-connect';

export const getAllBooks = async (event, context) => {
    context.callbackWaitsForEmptyEventLoop = false;

    await connectToMongo()

    try {

        const books = await Book.find()
        console.log('books: ', books)
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

export const getSingleBook = async (event, context) => {
    context.callbackWaitsForEmptyEventLoop = false;

    await connectToMongo()

    try {
        const doc = await Book.findById(event.pathParameters.id);
        return {
            statusCode: 200,
            body: JSON.stringify({
                data: doc,
            }, null, 2)
        };
    } catch (err) {
        return {
            statusCode: 200,
            body: JSON.stringify({
                data: err,
            }, null, 2)
        };
    }

}