import { expect } from "chai"
import { ImportMock } from 'ts-mock-imports';
import * as mongoConnectModule from './utils/mongo-connect'
import { getAllBooks } from './read';

describe('read ALL Books successfull call', () => {

    it('returns 200 containing all books when id is NOT specified.', async () => {
        const fakeEvent = {
            pathParameters: {
                id: 123
            }
        }

        const fakeContext = {}

        var mockManager = ImportMock.mockStaticClass(mongoConnectModule)

        const fakeFindResponse = {
            data: [{
                title: "ok",
                author: "foo"
            }, {
                title: "two",
                author: "twoFoo"
            },]
        }

        const find = mockManager.mock('find').resolves(fakeFindResponse)

        const result = await getAllBooks(fakeEvent, fakeContext)

        expect(find.calledOnce).to.be.true
        expect(find.getCalls()[0].args).to.eql([])

        expect(result.statusCode).to.eql(200)

        expect(result.body).to.eql(JSON.stringify({
            data: fakeFindResponse
        }, null, 2))

        mockManager.restore()

    })

})

describe('read Books failed', () => {

    it('returns 400 containing errors array.', async () => {
        const fakeEvent = {
            pathParameters: {
                id: 123
            }
        }

        const fakeContext = {}

        var mockManager = ImportMock.mockStaticClass(mongoConnectModule)

        const fakeError = "uh oh, an error happened!"

        const find = mockManager.mock('find').throws(fakeError)

        const result = await getAllBooks(fakeEvent, fakeContext)

        expect(find.calledOnce).to.be.true
        expect(find.getCalls()[0].args).to.eql([])

        expect(result.statusCode).to.eql(400)

        expect(result.body).to.eql(JSON.stringify({
            errors: [{ message: fakeError }]
        }, null, 2))

        mockManager.restore()

    })

})
