import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config();

const connection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to Database...");
    } catch (error) {
        console.log(error);
    }
};

connection();

