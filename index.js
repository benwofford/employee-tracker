const inquirer = require("inquirer");
const fs = require("fs");
const db = require("./db/connection");
const logo = require("asciiart-logo");
const config = require("./package.json");
console.log(logo(config).render());

const loadImage = () => {
  console.log(logo);
};

const getAllDepartments = () => {
  // query db for all depts.
  const sql = `SELECT id, name FROM department`;
  return db.query(sql);
};

const getAllRoles = () => {
  // query db for all roles
  const roleSQL = "SELECT title, salary, id FROM role";
  return db.query(roleSQL);
};

const getManagers = () => {
  const managerSQL = "SELECT first_name, last_name, id FROM employee";
  return db.query(managerSQL);
};

const getEmployees = () => {
  const employeeSQL = `SELECT first_name, last_name, role_id FROM employee`;
  return db.query(employeeSQL);
};

function init() {
  inquirer
    .prompt({
      // Main Menu
      type: "list",
      name: "choice",
      message: "What would you like to do?",
      choices: [
        {
          name: "View all departments",
          value: "VIEW_DEPT",
        },
        {
          name: "View all roles",
          value: "VIEW_ROLES",
        },
        {
          name: "View all employees",
          value: "VIEW_EMP",
        },
        {
          name: "Add a department",
          value: "ADD_DEPT",
        },
        {
          name: "Add a role",
          value: "ADD_ROLE",
        },
        {
          name: "Add an employee",
          value: "ADD_EMP",
        },
        {
          name: "Update an employee role",
          value: "UPDATE",
        },
        {
          name: "Exit",
          value: "EXIT",
        },
      ],
    })
    .then(async (answer) => {
      console.log(answer);
      if (answer.choice === "VIEW_DEPT") {
        // query db for all depts.
        const sql = `SELECT id, name FROM department`;

        db.query(sql, (err, rows) => {
          if (err) {
            console.log({ error: err.message });
            return;
          }
          console.table(rows);
          init();
        });
      } else if (answer.choice === "VIEW_ROLES") {
        // query db for all roles
        const sql = `SELECT id, title, salary, department_id FROM role`;

        db.query(sql, (err, rows) => {
          if (err) {
            console.log({ error: err.message });
            return;
          }
          console.table(rows);
          init();
        });
      } else if (answer.choice === "VIEW_EMP") {
        // query db for all employees
        const empSQL = `SELECT first_name, last_name, role_id, manager_id, role.title, role.salary, role.department_id
                        FROM employee
                        INNER JOIN role
                        ON employee.role_id = role.id`;
        // query db for roles of employees
        db.query(empSQL, (err, rows) => {
          if (err) {
            console.log({ error: err.message });
            return;
          }
          console.table(rows);
          init();
        });
      } else if (answer.choice === "ADD_DEPT") {
        // query db for dept id & dept name
        inquirer
          .prompt({
            type: "input",
            name: "addDept",
            message: "Enter the name of the new department.",
          })
          .then((answers) => {
            console.log(answers);
            const addDeptSQL =
              'INSERT INTO department(name) VALUES("' + answers.addDept + '")';
            console.log(addDeptSQL);
            db.query(addDeptSQL, (err, result) => {
              if (err) {
                console.log({ error: err.message });
                return;
              }
              console.log(result);
              init();
            });
          });
      } else if (answer.choice === "ADD_ROLE") {
        // [{id:1, first_name:"john", last_name:"doe"}, {id:2, first_name:"jane", last_name:"doe"}]
        const deps = await getAllDepartments();
        inquirer
          .prompt([
            {
              type: "input",
              name: "title",
              message: "Enter the title of the new role.",
            },
            {
              type: "input",
              name: "salary",
              message: "Enter the salary of the new role.",
            },
            {
              type: "list",
              name: "department_id",
              message: "Which department will house this role?",
              choices: deps,
            },
          ])
          .then((answers) => {
            //console.log(answers);
            const addRoleSQL =
              "INSERT INTO role (title, salary, department_id) VALUES(?, ?, ?)";
            //console.log(addRoleSQL);
            db.query(
              addRoleSQL,
              [answers.title, answers.salary, answers.department_id],
              (err, result) => {
                if (err) {
                  console.log({ error: err.message });
                  return;
                }
                //console.log(result);
                init();
              }
            );
          });
      } else if (answer.choice === "ADD_EMP") {
        // [{id:1, first_name:"john", last_name:"doe"}, {id:2, first_name:"jane", last_name:"doe"}]
        const roles = await getAllRoles();
        const managers = await getManagers();
        //console.log(roles);
        const roleChoices = roles.map(({ title, id }) => ({
          name: title,
          value: id,
        }));
        const mgrChoices = managers.map(({ first_name, last_name, id }) => ({
          name: `${first_name} ${last_name}`,
          value: id,
        }));

        inquirer
          .prompt([
            {
              type: "input",
              name: "firstName",
              message: "What is the employee's first name?",
            },
            {
              type: "input",
              name: "lastName",
              message: "What is the employee's last name?",
            },
            {
              type: "list",
              name: "role",
              message: "What is the employee's role?",
              choices: roleChoices,
            },
            {
              type: "list",
              name: "manager",
              message: "Who is the employee's manager?",
              choices: mgrChoices,
            },
          ])
          .then((answers) => {
            console.log(answers);
            const addEmpSQL =
              "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES(?, ?, ?, ?)";
            //console.log(addEmpSQL);
            db.query(
              addEmpSQL,
              [
                answers.firstName,
                answers.lastName,
                answers.role,
                answers.manager,
              ],
              (err, result) => {
                if (err) {
                  console.log({ error: err.message });
                  return;
                }
                //console.log(result);
                init();
              }
            );
          }); //.catch(error => console.error(error));
        //.catch(error => console.error(error));
      } else if (answer.choice === "UPDATE_EMP") {
        // query db for user id, first name & last name
        // query db for role id & role name
        // [{id:1, first_name:"john", last_name:"doe"}, {id:2, first_name:"jane", last_name:"doe"}]
        const emps = await getEmployees();
        const roles = await getAllRoles();

        inquirer
          .prompt([
            {
              type: "list",
              name: "employees",
              message: "Which employee would you like to update?",
              choices: emps,
            },
            {
              type: "list",
              name: "updateRole",
              message: "What is their new role?",
              choices: roles,
            },
          ])
          .then((answers) => {
            const updateEmpSQL = "UPDATE employee (role_id) VALUES (?)";
            db.query(updateEmpSQL, [answers.roles], (err, rows) => {
              if (err) {
                console.log({ error: err.message });
                return;
              }
              console.table(rows);
              init();
            });
          });
      } else if (answer.choice === "EXIT") {
        console.log("Goodbye.");
        process.exit();
      }
    });
}

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log(`Connection to employee_db established.`);
  init();
});
