const Employee = require("./Employee");

class Intern extends Employee {
    
    constructor(myname, myid, myemail, myschool) {
       
            super(myname, myid, myemail, "Intern");
            this.school = myschool;
        }
        getSchool(){
            return this.school;
        }
     
        getRole() {
            return "Intern"
          }
    }

module.exports = Intern;