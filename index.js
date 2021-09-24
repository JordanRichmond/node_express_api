import express from 'express';
import bodyParser from 'body-parser';
// import mongoose from 'mongoose';

import usersRoutes from './src/routes/users.js';


// express app
const app = express();

// connect to MongoDB
// const connectionURI = "mongodb+srv://demo:demo123@pokemontest.l9np2.mongodb.net/node-pokemon?retryWrites=true&w=majority";
// mongoose.connect(connectionURI, {useNewUrlParser: true, useUnifiedTopology: true})
//     .then((result) => console.log('Connected to Database...'))
//     .catch((err) => console.log(err))

// listen for requests
const PORT = 5000;

app.use(bodyParser.json());

app.use('/users', usersRoutes);

app.get('/', (req, res) => {
    res.send("Hello from Homepage.");
});

app.listen(PORT, () => {
    console.log(`Server Running on port: http://localhost:${PORT}`);
});