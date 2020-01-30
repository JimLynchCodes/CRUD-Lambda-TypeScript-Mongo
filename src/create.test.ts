import { expect } from "chai"
import Book, { connectToMongo } from './utils/mongo-connect';
// import { connectToMongo } from './utils/mongo-connect';
import * as mongoConnectModule from './utils/mongo-connect'
import { insertBook } from './create';
import { ImportMock, MockManager } from 'ts-mock-imports';
import { Model } from "mongoose";

describe('ok', () => {

    it('ok', async () => {

        const fakeEvent = { body: "{\"foo\": \"giggles\"}" }
        const fakeContext = {}

        // const httpMock = ImportMock.mockClass(mongoConnect, 'connectToMongo');


        // class save

        // const fakeBookMockManager = ImportMock.mockClass(mongoConnectModule.default)

        const bookToSave = "book"

        const fakeMongoConnect = ImportMock.mockFunction(mongoConnectModule, 'connectToMongo').resolves("foo");
        const mockManager: any = ImportMock.mockClass(mongoConnectModule)
        const sinonStub = mockManager.mock('save')
        
        
        console.log(sinonStub(null, {"foo": "bar"}))
        
        // .callsFake(() => {

        //     // return Promise.resolve({
        //     //     statusCode: 200,
        //     //     body: JSON.stringify({
        //     //         data: bookToSave,
        //     //     }, null, 2)
        //     // })


        // });


        // expect(sinonStub.calledTimes(1)).to.be.true

        // expect(sinonStub)
        // const mockManager: MockManager<Model<mongoConnectModule>> = ImportMock.mockClass(mongoConnectModule.default);
        // const sinonStub = mockManager.mock('save');
        // sinonStub.callsFake(() => {
        // custom code here

        console.log(';foobarrr');
        // })
        // fakeBookMockManager.mock("save", "foo")
        // fakeBookSave.save = () => {


        // const fakeBook = ImportMock.mockClass(mongoConnectModule.default)

        const result = await insertBook(fakeEvent, fakeContext)

        sinonStub.calledOnce()

        expect(result).to.eql(42)
    })
})

// })