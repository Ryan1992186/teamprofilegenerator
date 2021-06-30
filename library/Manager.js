const Employee = require ("./Employee");

class Manager extends Employee {
    constructor (name, userId, email, officeNumber) {
        super (name, userId, email);
        this.officeNumber = officeNumber;
    }
    getRole() {
        return "Manager";
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = Manager;