CREATE DATABASE
IF NOT EXISTS employee_tracker;
use employee_tracker;

CREATE TABLE department
(
    id INT PRIMARY KEY AUTO_INCREMENT,
    dept_name VARCHAR(30)
);

CREATE TABLE employee
(
    id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT
);

CREATE TABLE job_position
(
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT
);

-- display all the data - view all employees
SELECT employee.id, first_name, last_name, job_position.title, department.dept_name, job_position.salary, employee.manager_id
FROM employee
LEFT JOIN job_position ON employee.role_id = job_position.id
LEFT JOIN department ON department.id = job_position.department_id;

-- view all employees by department
SELECT employee.id, first_name, last_name, job_position.title, job_position.salary, employee.manager_id
FROM employee
LEFT JOIN job_position ON employee.role_id = job_position.id
LEFT JOIN department ON department.id = job_position.department_id
WHERE department.id = 2;

-- add department, role, employee:
    
INSERT INTO job_position
    (title, salary, department_id)
VALUES
("TITLE", NUMBER, DEPT_ID);

INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ("FIRST NAME", "SECOND NAME", role_id_NUMBER, manager_id_number);

UPDATE employee 
SET role_id = "new role id number"
WHERE where_condition;