const { Employees } = require("./classes/Employees")
const { Manager } = require("./classes/Manager")
const { SalesPerson } = require("./classes/SalesPerson")
const { SoftwareEngineer } = require("./classes/SoftwareEngineer")

// Run and debug your code here


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