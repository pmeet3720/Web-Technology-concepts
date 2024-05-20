const express = require("express");

const app = express();
const port = 80;

app.get('/', (req, res) => {
    res.send("This is the homepage of my first express app");
});

app.get('/about', (req, res) => {
    res.send("This is the about page of my first express app");
});

app.post('/about', (req, res) => {
    res.send("This is the request about page of my first express app");
});

app.listen(port, () => {
    console.log(`The application started succesfully at ${port}`);
});

