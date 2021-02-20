
// * `name`
// * `id`
// * `email`
// * `getName()`
// * `getId()`
// * `getEmail()`
// * `getRole()`&mdash;returns `'Employee'`

const inquirer = require("inquirer");

class Employee {
    constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    }

    getName() {
        // inquirer.prompt(
        //     {
        //         type: "input",
        //         message: "What is the name of the employee?",
        //         name: "name"
        //     },
        // )
        // .then((name)  => this.name = name)
        // .then(this.getId())
        return this.name;
    }

    getId() {
        // inquirer.prompt(
        //     {
        //         type: "input",
        //         message: "Employee ID # is: ",
        //         name: "id"
        //     }
        //     .then((id) => this.id = id)
        //     .then(this.getEmail())
        // )
        return this.id
    }

    getEmail(){
        // inquirer.prompt(
        //     {
        //         type: "input",
        //         message: "What is employee's email address?",
        //         name: "email"
        //     }
        //     .then((email) => this.email = email)
        //     // .then(this.getRole())
        
        // )
        return this.email;
    }

    getRole(){
        // inquirer.prompt(
        //     {
        //         type: "list",
        //         message: "What type of employee would you like to add?",
        //         choices: ["Manager", "Engineer", "Intern"]
        //     }
        //     .then((role) => this.role = role)
        // );
        return "Employee";
    }
}



module.exports = Employee;