
class Employee {
  
    constructor(name, id, email, role = "Employee") {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role
    }
  
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