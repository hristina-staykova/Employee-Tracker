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
      "View All Departments",
      "View All Roles",
      "Add New Department",
      "View All Employees by Dept.",
      // "View All Employees By Manager",
      // "Add Employee",
      "Remove Employee"
      // "Update Employee Role",
      // "Update Employee Manager"
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
      console.table(result);
    }
  );
}

function viewAllDepts() {
  connection.query("SELECT * FROM department;", function(err, result) {
    if (err) throw err;
    console.table(result);
  });
}

function viewAllRoles() {
  connection.query(
    "SELECT id, title, department_id FROM job_position;",
    function(err, result) {
      if (err) throw err;
      console.table(result);
    }
  );
}

async function addDept() {
  const deptInfo = await inquirer.prompt({
    name: "deptName",
    type: "input",
    message: "What is the department's name?"
  });

  connection.query(
    "INSERT INTO department (dept_name) VALUES (?);",
    deptInfo.deptName,
    function(err, result) {
      if (err) throw err;
      console.log("Department " + deptInfo.deptName + " was added.");
    }
  );
}

async function viewEmplByDept() {
  const deptInfo = await inquirer.prompt({
    name: "deptID",
    type: "input",
    message: "Enter department's ID?"
  });

  connection.query(
    `SELECT employee.id, first_name, last_name, job_position.title, job_position.salary, employee.manager_id
    FROM employee
    LEFT JOIN job_position ON employee.role_id = job_position.id
    LEFT JOIN department ON department.id = job_position.department_id
    WHERE department.id = ?;`,
    deptInfo.deptID,
    function(err, result) {
      if (err) throw err;
      console.table(result);
    }
  );
}

async function removeEmpl() {
  const empl = await inquirer.prompt({
    name: "id",
    type: "input",
    message: "Enter employee's ID: "
  });

  connection.query(`DELETE FROM employee WHERE id = ?;`, empl.id, function(
    err,
    result
  ) {
    if (err) throw err;
    console.log("Employee with ID: " + empl.id + " was removed.");
  });
}

async function main() {
  const options = await inquirer.prompt(mainOptions);

  switch (options.action) {
    case "Remove Employee":
      removeEmpl();
      break;

    case "View All Employees by Dept.":
      viewEmplByDept();
      break;

    case "Add New Department":
      addDept();
      break;

    case "View All Roles":
      viewAllRoles();
      break;

    case "View All Departments":
      viewAllDepts();
      break;

    case "View All Employees":
      viewAllData();
  }
}

connection.connect();

main();
