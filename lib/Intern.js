// extends Employee plus
// * `school`
// * `getSchool()`
// * `getRole()`&mdash;overridden to return `'Intern'`

const Employee = require("./Employee");
const inquirer = require("inquirer");

class Intern extends Employee {
    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school;

    }

    getSchool() {
        // inquirer.prompt(
        //     {
        //         type: "input",
        //         message: "What is employee's school affiliation?",
        //         name: "school"
        //     }
        //     .then(school)
        //     .then(this.getRole())
        // )
        return this.school
    }

    getRole(){
        return "Intern";
    }
}

module.exports = Intern;