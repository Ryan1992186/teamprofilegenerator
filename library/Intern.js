const Employee = require("./Employee");

class Intern extends Employee {
    constructor (name, userId, email, school) {
        super (name, userId, email);
        this.school = school;
    }
    getRole() {
        return "Intern";
    }
    getSchool() {
        return this.school;
    }
}

module.exports = Intern;