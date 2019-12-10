CREATE DATABASE IF NOT EXISTS employee_tracker;
use employee_tracker;

CREATE TABLE department(
id INT PRIMARY KEY,
dept_name VARCHAR(30));

CREATE TABLE employee(
id INT PRIMARY KEY,
first_name VARCHAR(30),
last_name VARCHAR(30),
role_id INT,
manager_id INT
);

CREATE TABLE job_position (
id INT PRIMARY KEY,
title VARCHAR(30),
salary DECIMAL,
department_id INT
);

