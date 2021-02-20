// extends Employee plus:
// * `github`&mdash;GitHub username
// * `getGithub()`
// * `getRole()`&mdash;overridden to return `'Engineer'` 

const Employee = require("./Employee");
const inquirer = require("inquirer");

class Engineer extends Employee {
    constructor(name, id, email, github){
        super(name, id, email)
        this.github = github;

    }

    getGithub(){
        // inquirer.prompt(
        //     {
        //         type: "input",
        //         message: "What is employee's GitHub username?",
        //         name: "github"
        //     }
        //     .then(github)
        //     .then(this.getRole())
        // )
        return this.github
    }
    getRole(){
        return "Engineer";
    }

}

module.exports = Engineer;