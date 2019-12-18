USE employee_tracker;
INSERT INTO department
    (dept_name)
VALUES
    ("Accounting"),
    ("Sales"),
    ("Marketing"),
    ("Human Resources");
    
    INSERT INTO job_position
    (title, salary, department_id)
VALUES
    ("Accountant", 1100.00, 1),
	("Sales Lead", 1400.00, 2),
    ("Salesperson", 1200.00, 2),
    ("Marketing Lead", 1450.00, 3),
	("Marketing Specialist", 1300.00, 3),
    ("HR Manager", 1500.00, 4);

INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ("Taylor", "Swift", 1, null),
    ("Michael", "Jackson", 2, null),
    ("Michael", "Buble", 3, 2),
    ("Harry", "Styles", 4, null),
    ("Miley", "Cyrus", 5, 4),
	("John", "Travolta", 5, 4),
    ("Leonardo", "DiCaprio", 6, null),
    ("Beyonce", "Knowles", 3, 2);

-- employee.role_id = job_position.id; employee.manager_id = employee.id; 