// extends Employee plus:
// * `github`&mdash;GitHub username
// * `getGithub()`
// * `getRole()`&mdash;overridden to return `'Engineer'` 

const Employee = require("./Employee");
const inquirer = require("inquirer");

class Engineer extends Employee {
    constructor(github){
    this.role = role;
    this.github = github;

    super(name, id, email);
    }

    getGithub(){
        inquirer.prompt(
            {
                type: "input",
                message: "What is employee's GitHub username?",
                name: "github"
            }
            .then(github)
            .then(this.getRole())
        )
    }
    getRole(){
        this.role = "Engineer";
    }

}

module.exports = Engineer;