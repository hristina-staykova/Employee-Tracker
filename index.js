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

const mainOptions = [
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

const newEmployee = [
  {
    name: "firstName",
    type: "input",
    message: "What is the first name of the new employee?"
  },
  {
    name: "lastName",
    type: "input",
    message: "What is the last name of the new employee?"
  },
  {
    name: "title",
    type: "list",
    message: "What is the job position of the new employee?",
    choices: [
      "Accountant",
      "Marketing Lead",
      "Marketing Specialist",
      "Sales Lead",
      "Salesperson",
      "HR Specialist"
    ]
  }
];

function viewAllData() {
  connection.query(
    "SELECT employee.id, first_name, last_name, job_position.title, department.dept_name, job_position.salary, employee.manager_id FROM employee LEFT JOIN job_position ON employee.role_id = job_position.id LEFT JOIN department ON department.id = job_position.department_id;",
    function(err, result) {
      if (err) throw err;
      console.log(result);
      console.table(result);
    }
  );
}

async function main() {
  const options = await inquirer.prompt(mainOptions);

  switch (options.action) {
    case "View All Employees":
      viewAllData();
      break;

    case "View All Employees by Dept.":
      // function ""View All Employees by Dept.";
      break;

    case "View All Employees by Manager":
      // function "View All Employees by Dept.";
      break;

    case "Add Employee":
      // function ""Add Employee";
      break;

    case "Remove Employee":
    // function "Remove Employee";
  }
}

main();

// //here come all the functions
// mysql.connect();
