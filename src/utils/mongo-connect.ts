import { connect, Document, Schema, model } from "mongoose";

let connected = false

export const connectToMongo = async() => {

    console.log('Really connecting to mongo (no mocks)!', connected)
    
    if (!connected) {

        console.log('Connecting to mongo...')
        const uri: string = "mongodb://127.0.0.1:27017/local";
        
        return await connect(uri, (err: any) => {
            if (err) {
                console.log(err.message);
                return err;
            } else {
                console.log("Successfully Connected!");
                connected = true
                return uri;
            }
        });
        
    }
}

export interface IBook extends Document {
    title: string;
    author: string;
}

export const BookSchema = new Schema({
    title: { type: String, required: true },
    author: { type: String, required: true }
});

const Book = model<IBook>("Book", BookSchema);
export default Book;