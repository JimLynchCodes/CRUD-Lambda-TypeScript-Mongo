import { expect } from "chai"
import * as mongoConnectModule from './utils/mongo-connect'
import { deleteBook } from './delete';
import { ImportMock } from 'ts-mock-imports';

describe('deleteBook sucessfull call', () => {

    it('returns 200 containing what Book.deleteBook returns', async () => {

        const fakeEvent = {
            pathParameters: {
                id: 123
            }
        }
        const fakeContext = {}

        var manager = ImportMock.mockStaticClass(mongoConnectModule);

        const fakeDeleteResponse = 46;

        manager.mock('deleteOne').resolves(fakeDeleteResponse)

        const result = await deleteBook(fakeEvent, fakeContext)

        expect(result.statusCode).to.eql(200)

        expect(result.body).to.eql(JSON.stringify({
            data: fakeDeleteResponse
        }, null, 2))

    })
})

describe('deleteBook errors', () => {

    it.only('returns 400 containing errors array containing Book.deleteBook error', async () => {

        const fakeEvent = {
            pathParameters: {
                id: 123
            }
        }
        const fakeContext = {}

        var manager = ImportMock.mockStaticClass(mongoConnectModule);

        const fakeDeleteError = "Oh no, there was an error!";

        manager.mock('deleteOne').callsFake(() => {
            throw new Error(fakeDeleteError)
        })

        const result = await deleteBook(fakeEvent, fakeContext)

        expect(result.statusCode).to.eql(400)

        expect(result.body).to.equal(JSON.stringify({
            errors: [`Error: ${fakeDeleteError}`]
        }, null, 2))

    })
})
