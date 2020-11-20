// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee");

// The Letter Class is responsible for displaying either an underscore or the underlying character for each letter in the word
class Engineer extends Employee{
    constructor(myName, myId, myEmail, mygithub) {
        super(myName,myId, myEmail);
        //this will create an instance of employee

    }
  
    // Returns either an underscore or the underlying character depending on `this.visible`
    //    because we call this function toString, when we call `this.letters.join` in
    //    Word.js, JavaScript automatically uses the value we return here
    getName() {
      return this.name;
    }

    getRole() {
        return 'Employee';
    }
  
  }
  
  module.exports = Engineer;