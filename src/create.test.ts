
import Book, * as mongoConnectModule from './utils/mongo-connect'
import { insertBook } from './create';

import { ImportMock, MockManager } from 'ts-mock-imports';

describe('create Book sucessfull call', () => {

    xit('returns 200 containing the book just created.', async () => {

        console.log("DERP")

        const fakeEvent = {
            body: JSON.stringify({
                title: "foo",
                author: "bar"
            })
        }

        const fakeContext = {}

        const fakeConnectResponse = async () => {
            return {
                body: {
                    "Foo": "bar"
                }
            }
        }
        
        
        // var manager = ImportMock.mockClass(Book)

        var mockFunction = ImportMock.mockFunction(mongoConnectModule, 'connectToMongo', fakeConnectResponse)
        
        // manager.mock('save').resolves('yay!')
        
        const result = await insertBook(fakeEvent, fakeContext)

        console.log("derp", result)
        console.log(result)

        mockFunction.restore()

        // manager.restore()

    })

})

// TODO - failure case