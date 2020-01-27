
export const healthCheck = async (event, _context) => {

    return {
        statusCode: 200,
        body: JSON.stringify({
            data: 'CRUD-Lambda-TypeScript-Mongo Service Is Up & Running! 👍',
        }, null, 2),
    };

}