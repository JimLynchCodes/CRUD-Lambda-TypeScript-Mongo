require('dotenv').config()
export const healthCheck = async (_event, _context) => {

    return {
        statusCode: 200,
        body: JSON.stringify({
            data: `CRUD-Lambda-TypeScript-Mongo Service Is Up & Running: ${process.env.ENV}! 👍`,
        }, null, 2),
    };

}