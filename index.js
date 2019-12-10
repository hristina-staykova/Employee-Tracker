fs = require("fs");
inquirer = require("inquirer");
mysql = require("mysql");
consoleTable = require("console.table");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "employee_tracker"
});

const questions = [
  {
    name: "action",
    type: "list",
    message: "What would you like to do",
    choices: [
      "View All Employees",
      "View All Employees by Dept.",
      "View All Employees By Manager",
      "Add Employee",
      "Remove Employee",
      "Update Employee Role",
      "Update Employee Manager"
    ]
  }
];

//here come all the functions
mysql.connect();
