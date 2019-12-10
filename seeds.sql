USE employee_tracker;
INSERT INTO department (id, dept_name)
VALUES 
(10, "Accounting"),
(20,"Sales"),
(30,"Marketing"),
(40,"Human Resources");

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (2459, "Taylor","Swift",11,null),
(4298, "Michael","Jackson",22,21),
(1864, "Michael","Buble",21,null),
(0928, "Harry","Styles",31,null),
(7482, "Miley","Cyrus",32,31),
(1726, "Leonardo","DiCaprio",41,null),
(8761, "Beyonce","Knowles",22,21);


INSERT INTO job_position (id, title, salary, department_id)
VALUES (11, "Accountant",1100.00,"10"),
(22, "Salesperson",1200.00,"20"),
(31, "Marketing Lead",1450.00,"30"),
(21, "Sales Lead", 1400.00,"20"),
(41, "HR Manager", 1500.00,"40"),
(32,"Marketing Specialist",1300.00,"30");
