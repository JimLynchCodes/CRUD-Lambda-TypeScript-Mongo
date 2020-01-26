import * as mongoose from "mongoose";

let connected = false

export const connectToMongo = async() => {

    console.log('connected - ', connected)
    if (!connected) {

        console.log('Connecting to mongo...')
        const uri: string = "mongodb://127.0.0.1:27017/local";
        
        return await mongoose.connect(uri, (err: any) => {
            if (err) {
                console.log(err.message);
                return err;
            } else {
                console.log("Successfully Connected!");
                connected = true
                return null;
            }
        });
        
    }
}

export interface IBook extends mongoose.Document {
    title: string;
    author: string;
}

export const BookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true }
});

const Book = mongoose.model<IBook>("Book", BookSchema);
export default Book;