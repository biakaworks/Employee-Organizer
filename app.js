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
   //role == manager
  managerQuestion(answers)
 };

 if(answers.role =="Intern"){
  //role == intern
 internQuestion(answers)
};

 if(answers.role =="Engineers"){
  //role == engineer
 engineerQuestion(answers)
};
 
  });
}

function managerQuestion(answer){
  inquirer
  .prompt([
    {
    type: "input",
    name: "manOfficeNumber",
    message: "What is your officeNumber?",
  },
  {
    type: "confirm",
    name: "areYouDone",
    message: "Are you done adding employees?",
  },
  ])
  .then(managerAnswer => {
    console.log(managerAnswer)
    //officenumber
    console.log(managerAnswer.manOfficeNumber)
    var newManager = new Manager(answer.name, answer.id, answer.email, managerAnswer.manOfficeNumber);
    employees.push(newManager)
    if(managerAnswer.areYouDone == false){
      //if they say no
      //call start()
      start()
    }
   else{

    fs.writeFile(outputPath, render(employees), (err) =>
      err
        ? console.log(err)
        : console.log("Success! Thanks for using Employee Generator")
    );
   } 
    
   
  });

}

function internQuestion(answer){
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
    console.log(internAnswer.internSchool)
    var newIntern = new itern(answer.name, answer.id, answer.email, internAnswer.internSchool);
    employees.push(newIntern)
    if(internAnswer.areYouDone == false){
      start()
    }
    else{

    fs.writeFile(outputPath, render(employees), (err) =>
      err
        ? console.log(err)
        : console.log("Success! Thanks for using Employee Generator")
    );
  }

});

}

function engineerQuestion(answer){
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
    console.log(engineerAnswer.gitHub)
    var newEngineer = new itern(answer.name, answer.id, answer.email, engineerAnswer.gitHub);
    employees.push(newEngineer)
    if(engineerAnswer.areYouDone == false){
      start()
    }
    else{

    fs.writeFile(outputPath, render(employees), (err) =>
      err
        ? console.log(err)
        : console.log("Success! Thanks for buildilng your Employee Files")
        );
      } 
     });
    }