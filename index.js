const { Employees } = require("./classes/Employees")
const { Manager } = require("./classes/Manager")
const { SalesPerson } = require("./classes/SalesPerson")
const { SoftwareEngineer } = require("./classes/SoftwareEngineer")

// Run and debug your code here

class Employees {
    #salary;
    #isHired;
    static #allEmployees;
    constructor(name, title, salary, isHired) {
        this.name = name; 
        this.title = title; 
        this.#salary = salary;
        this.#isHired = isHired;
        this.#allEmployees = Employee [];

    }

    
    setSalary(amount) {

    }

    status(command) {

    }

    getEmployees(){

    }

    setEmployees(Employees){

    }

    getTotalPayrool(employees){

    }
}




module.exports = {
    Employees,
    Manager,
    SalesPerson,
    SoftwareEngineer
}