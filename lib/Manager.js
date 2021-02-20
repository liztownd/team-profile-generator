// extends Employee
// * `officeNumber`
// * `getRole()`&mdash;overridden to return `'Manager'`

const Employee = require("./Employee");
const inquirer = require("inquirer");

class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;

    }

    getOfficeNumber(){
        // inquirer.prompt(
        //     {
        //         type: "input",
        //         message: "Office number: ",
        //         name: "officeNumber"
        //     }
        //     .then(officeNumber)
        //     .then(this.getRole())
        // )
        return this.officeNumber
    }

    getRole(){
        return "Manager";
    }
}

module.exports = Manager;