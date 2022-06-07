const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 5000;

//
// Enables JSON in the request body.
//
app.use(bodyParser.json());

//
// Enables cross origin resource sharing so the frontend can us this REST API.
//
app.use(cors());

//
// List of items in the todo list.
// Normally in a production application this might be stored in a database.
// For simplicity it is stored in memory.
//
const todoList = [
    {
        text: "Feed the cat",
    },
    {
        text: "Go to work",
    },
    {
        text: "Have a delicious ice cream",
    },
];

//
// Adds an item to the todo list.
//
app.post("/todo", (req, res) => {
    todoList.push(req.body.todoItem);
    res.sendStatus(200);
});

//
// Gets the todo list.
//
app.get("/todos", (req, res) => {
    res.json({
        todoList: todoList,
    });
})

app.listen(port, () => {
    console.log(`Todo list app listening on port ${port}`);
});