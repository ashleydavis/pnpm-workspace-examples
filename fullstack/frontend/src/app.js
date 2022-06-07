import axios from "axios";
import { useState, useEffect } from "react";

//
// In a production build you'd want to plugin the location of your production REST API.
//
const BASE_URL = "http://localhost:5000";

export function App() {
    const [todoList, setTodoList] = useState([]);
    const [newTodoItemText, setNewTodoItemText] = useState("");

    useEffect(() => {
        //
        // Retreive the todo list from the backend.
        //
        axios.get(`${BASE_URL}/todos`)
            .then(({ data }) => {
                setTodoList(data.todoList);
            })
            .catch(err =>{
                console.error(`Failed to retrieve todo list:`);
                console.error(err);
            });
    }, []);

    //
    // Adds a new todo item.
    //
    async function onAddNewTodoItem() {
        const newTodoItem = { text: newTodoItemText };
        await axios.post(`${BASE_URL}/todo`, { todoItem: newTodoItem });
        setTodoList(todoList.concat([ newTodoItem ]));
        setNewTodoItemText("");
    }

    if (todoList === undefined) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div>
                {todoList.map((todo, index) => {
                    return (
                        <div key={index}>
                            {todo.text}
                        </div>
                    );
                })}
            </div>
            <div>
                <div>
                    <textarea 
                        placeholder="Write a new todo list item here"
                        value={newTodoItemText}
                        onChange={evt => setNewTodoItemText(evt.currentTarget.value)}
                        />
                </div>

                <button onClick={onAddNewTodoItem}>
                    Add todo item
                </button>
            </div>
        </div>
    );
}