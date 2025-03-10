require('dotenv').config();
const express = require('express');
const connectToDatabase = require('./db') // Importerar db-filen
const postRoutes = require('./routes/postRoutes');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
connectToDatabase();

app.use('/posts', postRoutes);

app.listen(port, () => {
    console.log(`Server is runninng at: http://localhost:${port}`)
    console.log("Connected to database blogDB.")
})