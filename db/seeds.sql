INSERT INTO department (department_name)
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
VALUES ("Frank", "Reynolds", 1, --add manager ID--),
       ("Dennis", "Reynolds", 2, --add manager ID--),
       ("Ronald", "McDonald", 3, --add manager ID--),
       ("The", "Waitress", 4, --add manager ID--),
       ("Matthew", "Mara", 5, --add manager ID--),
       ("Deandra", "Reynolds", 6, --add manager ID--),
       ("Liam", "McPoyle", 7, --add manager ID--),
       ("Charlie", "Kelly", 8, --add manager ID--);
