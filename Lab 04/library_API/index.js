const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());
app.use(cors());

const uri = 'mongodb+srv://librarydb:CDKJRPYVM4TK6vWw@cluster0.ymlfy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(uri, {

}).then(() => {
    console.log("Database Connected");
    
}).catch((error) => {
    console.log("Connection Failed", error.message);

});

app.listen(3000, () => {
  console.log("Server is running");
});

const Book = require('./BookModel');

const Book1 = new Book({
    title: "book1",
    author: "Mr X",
    isbn: "12345",
    publishedYear: 2025,
    genre: "Fiction",
    availableCopies: 5
});