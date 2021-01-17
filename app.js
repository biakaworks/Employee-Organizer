const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const employees = []

// 1.prompt the user for team manager 
// 2. and then information about the team members. 
// 3. completed building the team, will create an HTML file displays team rosterprovided by the user. 
  //call render(employees) 
  //buildit out on html (convert string)
    //fs.write file(render(employees) ) to outpathPath


function start(){
  //ask for name, id, email, role
  inquirer
  .prompt([

    {
      type: "input",
      name: "name",
      message: "What is your name?",
    },
    {
      type: "input",
      name: "id",
      message: "What is your ID?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your email?",
    },
    {
      type: "list",
      name: "role",
      message: "What is your role?",
      choices: [
        "Engineers",
        "Interns",
        "Manager"
      ]
    },
  ])
  .then(answers => {
 console.log(answers);
 if(answers.role =="Manager"){
  managerQuestion(answers)
 }
 
     //role == manager
    //mangerQuestions(answers)
  });

  .then(answers => {
    console.log(answers);
    if(answers.role =="Interns"){
     internQuestion(answers)
    }
  });

  .then(answers => {
    console.log(answers);
    if(answers.role =="Engineer"){
     engineerQuestion(answers)
    }
    
        //role == manager
       //mangerQuestions(answers)
     });
 


}

function mangerQuestion(answers){
  inquirer
  .prompt([
    {
    type: "input",
    name: "officeNumber",
    message: "What is your officeNumber?",
  },
  {
    type: "confirm",
    name: "areYouDone",
    message: "Would you like to add another employee?",
  },
  ])
  .then(managerAnswer => {
    console.log(managerAnswer)
    //officenumber
    console.log(managerAnswer.myofficeNumber)
    var newGuy = new Manager(answer.name, answer.id, answer.email, managerAnswer.officeNumber);
    employees.push(newGuy)
    //if they say yes
      //call start()
    //if no more
      // 3. completed building the team, will create an HTML file displays team rosterprovided by the user. 
  //call render(employees) 
  //buildit out on html (convert string)
    //fs.write file(render(employees) ) to outpathPath
  });

}

function internQuestion(answers){
  inquirer
  .prompt([
    {
    type: "input",
    name: "internSchool",
    message: "What school did the intern attend?",
  },
  {
    type: "confirm",
    name: "areyoudone",
    message: "Would you like to add another employee?",
  },
  ])
  .then(internAnswer => {
    console.log(internAnswer)
    //whatschool
    console.log(internAnswer.myschool)
    var newGuy = new itern(answer.name, answer.id, answer.email, internAnswer.myschool);
    employees.push(newGuy)
    //if they say yes
      //call start()
    //if no more
      // 3. completed building the team, will create an HTML file displays team rosterprovided by the user. 
  //call render(employees) 
  //buildit out on html (convert string)
    //fs.write file(render(employees) ) to outpathPath
  });

}

function engineerQuestion(answers){
  inquirer
  .prompt([
    {
    type: "input",
    name: "gitHub",
    message: "What is your GitHub account?",
  },
  {
    type: "confirm",
    name: "areyoudone",
    message: "Would you like to add another employee?",
  },
  ])
  .then(engineerAnswer => {
    console.log(engineerAnswer)
    //whatschool
    console.log(engineerAnswer.github)
    var newGuy = new itern(answer.name, answer.id, answer.email, engineerAnswer.github);
    employees.push(newGuy)
    //if they say yes
      //call start()
    //if no more
      // 3. completed building the team, will create an HTML file displays team rosterprovided by the user. 
  //call render(employees) 
  //buildit out on html (convert string)
    //fs.write file(render(employees) ) to outpathPath
  });

}

// function prompter(managerQuestions) {
//   const Manager = new Manager (answers.name, answer.id, answer.email, answer.officeNumber)
//   employeeList.push(manager);
// };

// //Ask About Managers First
// const managerQuestions = [

//   {
//     type: "input",
//     name: "ManagerName",
//     message: "What is the name of the Manager?",
//   },
//   {
//     type: "input",
//     name: "managerId",
//     message: "What is the manager's ID?",
//   },
//   {
//     type: "input",
//     name: "managerEmail",
//     message: "What is the manager's email?",
//   },
//   {
//     type: "input",
//     name: "managerOfficeNumber",
//     message: "What is the manager's office number?",
//   },
// ];

//Ask Employee Questions 
// const teamQuestions = [
//   {
//     type: "input",
//     name: "addEmployeeQuestions",
//     message: "Do you want to add more employees?",
//     choices: [
//       "Add new Engineers",
//       "Add new Interns",
//       "No more Employees"
//     ]
//   },
// ];

//Ask about the Engineers
// const engineerQuestions = [

//   {
//     type: "input",
//     name: "engineerName",
//     message: "What is the name of the engineer?",
//   },
//   {
//     type: "input",
//     name: "engineerId",
//     message: "What is the engineer's ID?",
//   },
//   {
//     type: "input",
//     name: "engineerEmail",
//     message: "What is the engineer's email?",
//   },
//   {
//     type: "input",
//     name: "engineerGithub",
//     message: "What is the engineer's Github account?",
//   },
// ];

//Ask about the Interns
// const engineerQuestions = [

//   {
//     type: "input",
//     name: "internName",
//     message: "What is the name of the intern?",
//   },
//   {
//     type: "input",
//     name: "internId",
//     message: "What is the intern's ID?",
//   },
//   {
//     type: "input",
//     name: "internEmail",
//     message: "What is the intern's email?",
//   },
//   {
//     type: "input",
//     name: "internSchool",
//     message: "Where did the company intern go to school",
//   },
// ];

// async function prompter(managerQuestions, engineerQuestions, internQuestions) {
//   inquirer.prompt(teamQuestions).then((answer) => {};

// I'm trying to figure out how to call upon my "conts" for it to store the answers to the questions above to turn them them in a JSON for the HTML

  // function prompter(managerQuestions) {
  //   const Manager = new Manager (answers.name, answer.id, answer.email, answer.officeNumber)
  //   employeeList.push(manager);
  // };

  // Need to ask if they have another employee

  // function prompter(engineerQuestions) {
  //   const Engineer = new Engineer (answers.name, answer.id, answer.email, answer.GitHub)
  //   employeeList.push(engineer);
  // };

  // // Need to ask if they have another employee

  // function makeintern(internQuestions) {
  //   const Intern = new Intern (answers.name, answer.id, answer.email, answer.school)
  //   employeeList.push(intern);
  // };

  // Need to ask if they have another employee
start();