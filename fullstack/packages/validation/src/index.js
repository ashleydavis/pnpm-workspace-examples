
//
// Validates a todo item and returns an error message if there's a problem.
//
function validateTodo(todoItem) {
    if (!todoItem) {
        return {
            valid: false,
            message: "Todo item has no data.",
        };
    }

    if (!todoItem.text) {
        return {
            valid: false,
            message: "Todo item has no text.",
        };
    }

    return { valid: true };
}


module.exports = {
    validateTodo,
};