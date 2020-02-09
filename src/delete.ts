import Book, { connectToMongo } from "./utils/mongo-connect";

export const deleteBook = async (event, context) => {
    context.callbackWaitsForEmptyEventLoop = false

    await connectToMongo()

    try {
        const result = await Book.deleteOne({ _id: event.pathParameters.id })
        return {
            statusCode: 200,
            body: JSON.stringify({
                data: result,
            }, null, 2)
        }

    } catch (err) {

        console.log("err is " + err.toString())
        return {
            statusCode: 400,
            body: JSON.stringify({
                errors: [err.toString()],
            }, null, 2)
        }
    }

}