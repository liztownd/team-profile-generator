// gets data from employee + Eng/Int/Man
// generates styled html file

const fs = require("fs");
const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Engineer");
const Employee = require("./lib/Employee");
const generateHtml = require("./src/generateHtml");

const employees = [];

const addEmployee = [
    {
        type: "confirm",
        message: "Add new employee?",
        name: "add"
    }
]

const empType = [
    {
        type: "list",
        message: "What type of employee would you like to add?",
        choices: ["Manager", "Engineer", "Intern"]
    }
]


function init(){
inquirer
    .prompt(addEmployee)
    .then((add) => {
        console.log(add);
        if (add === true){
            getType();
        }
        else {
            generateHtml(employees)
            console.log(employees);
        }
        
    })
   
}

function getType(){
    inquirer.prompt(empType)
    .then(type =>  {
       newEmployee(type)})
        
}

function newEmployee(){
    if (type === "Manager"){
        const employee = new Manager;
        Manager.getName();
        Manager.getRole();
        employees.push(employee);
        init();

    }
    else if (type === "Engineer"){
        const employee = new Engineer;
        Engineer.getName();
        Engineer.getRole();
        employees.push(employee);
        init();
    }
    else {
        const employee = new Intern;
        Intern.getName();
        Intern.getRole();
        employees.push(employee);
        init();
    }
}

init();