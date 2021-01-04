// The Letter Class is responsible for displaying either an underscore or the underlying character for each letter in the word
class Employee {
    constructor(myName, myId, myEmail, role = "Employee") {
        this.name = myName;
        this.id = myId;
        this.email = newEmail;
        this.role = role
    }
  
    // Returns either an underscore or the underlying character depending on `this.visible`
    //    because we call this function toString, when we call `this.letters.join` in
    //    Word.js, JavaScript automatically uses the value we return here
    getName() {
      return this.name;
    }

    getRole() {
        return this.role;
    }
  
    getId() {
      return this.id;
  }
  
    getEmail() {
    return this.email;
}
  }
  
  module.exports = Employee;