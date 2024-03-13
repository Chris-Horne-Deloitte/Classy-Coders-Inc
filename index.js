const { Employees } = require("./classes/Employees")
const { Manager } = require("./classes/Manager")
const { SalesPerson } = require("./classes/SalesPerson")
const { SoftwareEngineer } = require("./classes/SoftwareEngineer")

// Run and debug your code here
const Employees = require('./Employees');

class Manager extends Employees {
  #employeesManaged;

  constructor(name, position, salary, department, employeesManaged = []) {
    super(name, position, salary);
    this.department = department;
    this.#employeesManaged = employeesManaged;
  }
  getEmployeesManaged() {
    return this.#employeesManaged;
  }

  setEmployeesManaged(employee) {
    this.#employeesManaged.push(employee);
  }
}

module.exports = Manager;

module.exports = {
    Employees,
    Manager,
    SalesPerson,
    SoftwareEngineer
}