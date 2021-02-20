// gets data from employee + Eng/Int/Man
// generates styled html file

const fs = require("fs");
const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const Employee = require("./lib/Employee");
const generateHtml = require("./src/generateHtml");

const employees = [];

// const addEmployee = [
//     {
//         type: "confirm",
//         message: "Add new employee?",
//         name: "add"
//     }
// ]

// const empType = [
//     {
//         type: "list",
//         message: "What type of employee would you like to add?",
//         choices: ["Manager", "Engineer", "Intern"]
//     }
// ]

// const questions = [
//     {
//         type: "input",
//         message: "What is the name of the employee?",
//         name: "name"
//     },
//     {
//         type: "input",
//         message: "Employee ID # is: ",
//         name: "id"
//     },
//     {
//         type: "input",
//         message: "What is employee's email address?",
//         name: "email"
//     },
//     {
//         type: "list",
//         message: "What type of employee would you like to add?",
//         choices: ["Manager", "Engineer", "Intern"],
//         name: "type"
//     },    
// ]

function buildManager(){
    inquirer.prompt([
        {
            
            type: "input",
            message: "What is the name of your Manger?",
            name: "name"
            
        },
        {
            type: "input",
            message: "Managers ID # ",
            name: "id"
        },
        {
            type: "input",
            message: "What is managers's email address?",
            name: "email"
        },
        {
            type: "input",
            message: "What is your office number?",
            name: "office"
        }   
    ]).then(answers =>{
        //console.log(answers)
        const manager = new Manager(answers.name, answers.id, answers.email, answers.office)
       //console.log(manager)
        employees.push(manager)
        //create our team
        buildTeam();
    })
}



function init() {
    // inquirer
    //     .prompt(
    //             {
    //     type: "confirm",
    //     message: "Lets create a Manager for your team.",
    //     name: "add"
    // },
    // )
    console.log("Lets build your team")
    buildManager();

}

function buildTeam() {

   
        inquirer.prompt(
            {
                type: "list",
                message: "What type of employee would you like to add?",
                choices: ["Engineer", "Intern", "I dont want to create any more mebers"],
                name: "type"
            }

        )
        .then((selection) =>  {
          switch(selection.type){
            case "Engineer":
                createEngineer();
                break;
            case "Intern":
                createIntern();
                break;
            default:
                writeHTML();
          }

        })
    }


    function createEngineer(){
        inquirer.prompt([
            {
                
                type: "input",
                message: "What is the name of your Engineer?",
                name: "name"
                
            },
            {
                type: "input",
                message: "Engineer ID # ",
                name: "id"
            },
            {
                type: "input",
                message: "What is engineer's email address?",
                name: "email"
            },
            {
                type: "input",
                message: "What is your github?",
                name: "github"
            }   
        ]).then(answers =>{
            //console.log(answers)
            const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
           //console.log(manager)
            employees.push(engineer)
            //create our team
            buildTeam();
        })
    };

    function createIntern(){
        inquirer.prompt([
            {
                
                type: "input",
                message: "What is the name of your Intern?",
                name: "name"
                
            },
            {
                type: "input",
                message: "Intern ID # ",
                name: "id"
            },
            {
                type: "input",
                message: "What is Intern's email address?",
                name: "email"
            },
            {
                type: "input",
                message: "What is your interns school?",
                name: "school"
            }   
        ]).then(answers =>{
            //console.log(answers)
            const intern = new Intern(answers.name, answers.id, answers.email, answers.school)
           //console.log(manager)
            employees.push(intern)
            //create our team
            buildTeam();
        })
    }


// maybe a switch case?

function newEmployee(type) {
    if (type.type === "Manager") {
        Manager.getName();
        Manager.getRole();
        const employee = new Manager;
        employees.push(employee);
        init();

    }
    else if (type.type === "Engineer") {

        Employee.getName();
        Engineer.getRole();
        const employee = new Engineer;

        employees.push(employee);
        init();
    }
    else {
        Intern.getName();
        Intern.getRole();
        const employee = new Intern;
        employees.push(employee);
        init();
    }
}

function writeHTML() {
    console.log(employees)
    if (employees === []) {
        console.log("There are no employees entered.")
        return
    }
    else {
        console.log(generateHtml(employees))
        fs.writeFile("./dist/myTeam.html", `${generateHtml(employees)}`, (err) => {
            err ? console.log(err) : console.log('Successfully created Team Profile page!')
        });
   
    }
}

init();