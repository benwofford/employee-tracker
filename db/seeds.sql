INSERT INTO department (department_name)
VALUES ("Sales"),
       ("Engineering"),
       ("Finance"),
       ("Legal");

INSERT INTO role (title, salary, department_id, manager_id)
VALUES ("Sales Lead", 100000, 1, 1),
       ("Salesperson", 80000, 1, null),
       ("Lead Engineer", 150000, 2, 2),
       ("Software Engineer", 120000, 2, null),
       ("Account Manager", 160000, 3, 3),
       ("Accountant", 125000, 3, null),
       ("Legal Team Lead", 250000, 4, 4),
       ("Lawyer", 190000, 4, null);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Frank", "Reynolds", 1, null),
       ("Dennis", "Reynolds", 2, 1),
       ("Ronald", "McDonald", 3, null),
       ("The", "Waitress", 4, 2, 2),
       ("Matthew", "Mara", 5, null),
       ("Deandra", "Reynolds", 6, 3),
       ("Liam", "McPoyle", 7, null),
       ("Charlie", "Kelly", 8, 4);
