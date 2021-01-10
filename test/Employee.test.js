const Employee = require("../lib/Employee");

test("Can instantiate Employee instance", () => {
  const e = new Employee();
  expect(typeof(e)).toBe("object");
});

test("Can set name via constructor arguments", () => {
  const myname = "Alice";
  const user = new Employee(myname);
  expect(user.name).toBe(myname);
  //e.name == myName
});

test("Can set id via constructor argument", () => {
  const myId = 100;
  const e = new Employee("Foo", myId);
  expect(e.id).toBe(myId);
});

test("Can set email via constructor argument", () => {
  const newEmail = "test@test.com";
  const e = new Employee("Foo", 1, newEmail);
  expect(e.email).toBe(newEmail);
});

test("Can get name via getName()", () => {
  const testValue = "Alice";
  const e = new Employee(testValue);
  expect(e.getName()).toBe(testValue);
});

test("Can get id via getId()", () => {
  const testValue = 100;
  const e = new Employee("Foo", testValue);
  expect(e.getId()).toBe(testValue);
});

test("Can get email via getEmail()", () => {
  const testValue = "test@test.com";
  const e = new Employee("Foo", 1, testValue);
  expect(e.getEmail()).toBe(testValue);
});

test("getRole() should return \"Employee\"", () => {
  const testValue = "Employee";
  const e = new Employee("Alice", 1, "test@test.com");
  expect(e.getRole()).toBe(testValue);
});
