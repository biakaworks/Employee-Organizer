// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee");

// The Letter Class is responsible for displaying either an underscore or the underlying character for each letter in the word
class Engineer extends Employee{

    constructor(myName, myId, myEmail, github) {
        super(myName,myId, myEmail, "Engineer");
        this.github = github;
    }
    getGithub() {
      return this.github;
    }
  }
  
  module.exports = Engineer;