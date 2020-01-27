import Book, { connectToMongo } from './utils/mongo-connect';

export const insertBook = async (event, _context) => {

    await connectToMongo()

    var book = new Book(JSON.parse(event.body));

    return new Promise((resolve, reject) => {
        book.save((err: any, book) => {
            if (err)
                reject({
                    statusCode: 400,
                    body: JSON.stringify({
                        error: err,
                    }, null, 2),
                })
            else {
                console.log('Book has been saved!')
                resolve({
                    statusCode: 200,
                    body: JSON.stringify({
                        data: book,
                    }, null, 2)
                })
            }
        })
    });

}