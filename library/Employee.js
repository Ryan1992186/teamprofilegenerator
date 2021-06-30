class Employee {
    constructor(name, userId, email) {
        this.name = name;
        this.userId = userId;
        this.email = email;
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.userId;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return "Employee";
    }
}

module.exports = Employee;