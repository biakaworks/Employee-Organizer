const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

//Ask About Managers
const managerQuestions = [

  {
    type: "input",
    name: "ManagerName",
    message: "What is the name of the Manager?",
  },
  {
    type: "input",
    name: "managerId",
    message: "What is the manager's ID?",
  },
  {
    type: "input",
    name: "managerEmail",
    message: "What is the manager's email?",
  },
  {
    type: "input",
    name: "managerOfficeNumber",
    message: "What is the manager's office number?",
  },
];

//Ask about the Engineers
const engineerQuestions = [

  {
    type: "input",
    name: "engineerName",
    message: "What is the name of the engineer?",
  },
  {
    type: "input",
    name: "engineerId",
    message: "What is the engineer's ID?",
  },
  {
    type: "input",
    name: "engineerEmail",
    message: "What is the engineer's email?",
  },
  {
    type: "input",
    name: "engineerGithub",
    message: "What is the engineer's Github account?",
  },
];

//Ask about the Interns
const engineerQuestions = [

  {
    type: "input",
    name: "internName",
    message: "What is the name of the intern?",
  },
  {
    type: "input",
    name: "internId",
    message: "What is the intern's ID?",
  },
  {
    type: "input",
    name: "internEmail",
    message: "What is the intern's email?",
  },
  {
    type: "input",
    name: "internSchool",
    message: "Where did the company intern go to school",
  },
];
