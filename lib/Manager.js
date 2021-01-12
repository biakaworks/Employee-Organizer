const Employee = require("./Employee");

class Manager extends Employee {
    
    constructor(myname, myid, myemail, myofficeNumber) {
            super(myname, myid, myemail, "Manager");
            this.officeNumber = myofficeNumber;
        }
        getOfficeNumber() {
           // return this.officeNumber; this does not exist
           //what do we have to use that exsists?
           //name, id, email is part of employee so prob want that
           //what we want is something from manager
           //this.office
           return this.officeNumber;
        }

        getRole() {
            return "Manager"
          }
    }

module.exports = Manager;