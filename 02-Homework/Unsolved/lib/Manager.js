const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, office) {
            super(name, id, email, "Manager");
            this.office = officeNumber;
        }
        getOfficeNumber() {
            return this.officeNumber;
        }
    }

module.exports = Manager;