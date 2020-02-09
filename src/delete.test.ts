import { expect } from "chai"
import * as mongoConnectModule from './utils/mongo-connect'
import { deleteBook } from './delete';
import { ImportMock } from 'ts-mock-imports';

describe('deleteBook sucessfull call', () => {

    it('returns 200 containing the data that Book.deleteBook resolves.', async () => {

        const fakeEvent = {
            pathParameters: {
                id: 123
            }
        }
 
        const fakeContext = {}

        var bookMockManager = ImportMock.mockStaticClass(mongoConnectModule)
        var mockFunction = ImportMock.mockFunction(mongoConnectModule, 'connectToMongo', "url")

        const fakeDeleteResponse = 46

        const deleteOneMock = bookMockManager.mock('deleteOne').resolves(fakeDeleteResponse)

        const result = await deleteBook(fakeEvent, fakeContext)

        expect(deleteOneMock.calledOnceWith({ _id: fakeEvent.pathParameters.id })).to.be.true

        expect(result.statusCode).to.eql(200)

        expect(result.body).to.eql(JSON.stringify({
            data: fakeDeleteResponse
        }, null, 2))

        bookMockManager.restore()
        // mockFunction.restore()
    })
})

describe('deleteBook errors', () => {

    it('returns 400 with errors array containing Book.deleteBook error', async () => {

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

        manager.restore()

    })
})
