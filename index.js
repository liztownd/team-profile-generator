// gets data from employee + Eng/Int/Man
// generates styled html file

const fs = require("fs");
const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const generateHtml = require("./src/generateHtml");

const employees = [];



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
        const manager = new Manager(answers.name, answers.id, answers.email, answers.office)
        employees.push(manager)
        //create our team
        console.log("Now let's add some team members!")
        buildTeam();
    })
}



function init() {
    console.log("Let's build your team!")
    buildManager();
}

function buildTeam() {   

        inquirer.prompt(
            {
                type: "list",
                message: "What type of employee would you like to add?",
                choices: ["Engineer", "Intern", "I dont want to create any more members"],
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
                message: "What is your Engineer's email address?",
                name: "email"
            },
            {
                type: "input",
                message: "What is your Engineer's GitHub username?",
                name: "github"
            }   
        ]).then(answers =>{
            const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
            employees.push(engineer)
            //create our team
            console.log("Let's add some more team members!");
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
                message: "What is your Intern's school affiliation?",
                name: "school"
            }   
        ]).then(answers =>{
            const intern = new Intern(answers.name, answers.id, answers.email, answers.school)
            employees.push(intern)
            //create our team
            console.log("Let's add another team member!")
            buildTeam();
        })
    }


function writeHTML() {
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