import express from 'express';
import './src/db/connection.js';
import usersRoutes from './src/routes/users.js';


// express app
const app = express();

// listen for requests
const PORT = 5000;

app.use(express.json());

app.use('/users', usersRoutes);

app.get('/', (req, res) => {
    res.send("Hello from Homepage.");
});

app.listen(PORT, () => {
    console.log(`Server Running on port: http://localhost:${PORT}`);
});