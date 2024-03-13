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
class SalesPerson extends Employees {
    #totalSales
    constructor(clients,totalSales){
        this.clients = [];
        this.#totalSales = 0; 
    }
    //first get method that returns the totalSales for the salesperson
    getSalesNumbers(){
        return this.#totalSales;
    }
    makeSales(amount){
        this.#totalSales += amount;
    }
}


module.exports = {
    Employees,
    Manager,
    SalesPerson,
    SoftwareEngineer
}