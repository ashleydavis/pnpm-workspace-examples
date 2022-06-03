const a = require("a");

function getMessage() {
    return a.getMessage() + " and package B";
}

module.exports = {
    getMessage,
};
