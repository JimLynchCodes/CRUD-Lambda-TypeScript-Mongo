import { expect } from "chai"
import * as mongooseModule from 'mongoose';
import { connectToMongo } from './mongo-connect';
import { ImportMock } from 'ts-mock-imports'

describe('Successfully opens a connection to a Mongo database.', () => {

    xit('returns promise resolving with uri.', async () => {

        // mock out mongoose.connect

        // => pass in uri based on environment variables

        // expect mongoose.connect was called with
        //1. uri
        // 2. function with nil param


        //other case same but / 2. function with nil param





        const fakeConnectResponse = {
            pathParameters: {
                id: 123
            }
        }

        // const fakeContext = {}

        // var mongooseMockManager = ImportMock.mockFunction(['connect'] => {
        //     return 42;
        // }, 42)

        // var mock = mongooseMockManager.mock('connect').resolves(fakeConnectResponse)

        // var mongooseMockManager = ImportMock.mockFunction(['connect']).returns(fakeConnectResponse);

        // console.log(mongooseMockManager)
        const fakeDeleteResponse = 46;
        
        // const mockConnect = mongooseMockManager.mock('connect').resolves(fakeConnectResponse)
        // console.log(mockConnect)

        const result = await connectToMongo()

        // expect(deleteOneMock.calledOnceWith({ _id: fakeEvent.pathParameters.id })).to.be.true

        // expect(result.statusCode).to.eql(200)

        // expect(result.body).to.eql(JSON.stringify({
        //     data: fakeDeleteResponse
        // }, null, 2))

    })
})

describe('Fails when trying to open a connection to a Mongo database.', () => {

    xit('returns promise resolving with error message', async () => {

        // const fakeEvent = {
        //     pathParameters: {
        //         id: 123
        //     }
        // }
        // const fakeContext = {}

        // var manager = ImportMock.mockStaticClass(mongoConnectModule);

        // const fakeDeleteError = "Oh no, there was an error!";

        // manager.mock('deleteOne').callsFake(() => {
        //     throw new Error(fakeDeleteError)
        // })

        // const result = await deleteBook(fakeEvent, fakeContext)

        // expect(result.statusCode).to.eql(400)

        // expect(result.body).to.equal(JSON.stringify({
        //     errors: [`Error: ${fakeDeleteError}`]
        // }, null, 2))

    })
})
