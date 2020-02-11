import Book, { connectToMongo } from './utils/mongo-connect';

export const getAllBooks = async (_event, context) => {
    context.callbackWaitsForEmptyEventLoop = false;

    await connectToMongo()

    try {

        const books = await Book.find()

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
                errors: [{ "message": err.name.toString() }],
            }, null, 2),
        }
    }

}

export const getBooksPaginated = async (_event, context) => {
    context.callbackWaitsForEmptyEventLoop = false;

    const size = _event.queryParameters.size || 5
    const afterCursor = _event.queryParameters.after
    const beforeCursor = _event.queryParameters.before

    await connectToMongo()

    try {

        const paginatedQuery: any = {}

        if (afterCursor || beforeCursor) {

            paginatedQuery._id = {}
         
            if (beforeCursor)
                paginatedQuery._id["$lt"] = beforeCursor
            
            if (afterCursor)
                paginatedQuery._id["$gt"] = afterCursor
        }

        const books = await Book.find(paginatedQuery).limit(size).sort({"_id":-1})

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
                errors: [{ "message": err.name.toString() }],
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

