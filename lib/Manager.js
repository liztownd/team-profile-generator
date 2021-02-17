// extends Employee
// * `officeNumber`
// * `getRole()`&mdash;overridden to return `'Manager'`

const Employee = require("./Employee");
const inquirer = require("inquirer");

class Manager extends Employee {
    constructor(officeNumber){
        this.role = role;
        this.officeNumber = officeNumber;

        super(name, id, email);
    }

    getOfficeNumber(){
        inquirer.prompt(
            {
                type: "input",
                message: "Office number: ",
                name: "officeNumber"
            }
            .then(officeNumber)
            .then(this.getRole())
        )
    }

    getRole(){
        this.role = "Manager";
    }
}

module.exports = Manager;