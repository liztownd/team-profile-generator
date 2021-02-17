// extends Employee plus
// * `school`
// * `getSchool()`
// * `getRole()`&mdash;overridden to return `'Intern'`

const Employee = require("./Employee");
const inquirer = require("inquirer");

class Intern extends Employee {
    constructor(school){
        this.role = role;
        this.school = school;

        super(name, id, email);
    }

    getSchool() {
        inquirer.prompt(
            {
                type: "input",
                message: "What is employee's school affiliation?",
                name: "school"
            }
            .then(school)
            .then(this.getRole())
        )
    }

    getRole(){
        this.role = "Intern";
    }
}

module.exports = Intern;