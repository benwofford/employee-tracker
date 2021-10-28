INSERT INTO department (name)
VALUES ("Sales"),
       ("Engineering"),
       ("Finance"),
       ("Legal");

INSERT INTO role (title, salary, department_id)
VALUES ("Sales Lead", 100000, 1),
       ("Salesperson", 80000, 1),
       ("Lead Engineer", 150000, 2),
       ("Software Engineer", 120000, 2),
       ("Account Manager", 160000, 3),
       ("Accountant", 125000, 3),
       ("Legal Team Lead", 250000, 4),
       ("Lawyer", 190000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Frank", "Reynolds", 0, null),
       ("Dennis", "Reynolds", 1, 1),
       ("Ronald", "McDonald", 2, null),
       ("The", "Waitress", 3, 2),
       ("Matthew", "Mara", 4, null),
       ("Deandra", "Reynolds", 5, 3),
       ("Liam", "McPoyle", 6, null),
       ("Charlie", "Kelly", 7, 4);
