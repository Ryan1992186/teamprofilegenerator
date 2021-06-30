const Employee = require("./Employee");

class Engineer extends Employee {
    constructor (name, userId, email, username) {
        super(name, userId, email);
        this.username = username;
    }
    getRole() {
        return "Engineer";
    }
    username() {
        return this.username;
    }
}

module.exports = Engineer;