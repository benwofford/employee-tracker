const inquirer = require("inquirer");
const fs = require("fs");
const db = require("./db/connection");
const logo = require('asciiart-logo');
const config = require('./package.json');
console.log(logo(config).render());


//     {
//     // Add department
//       type: 'input',
//       name: 'addDepartment',
//       message: 'What would you like to do?',
//     },
//     {
//     // Add a role
//       type: 'input',
//       name: 'addRole',
//       message: 'What would you like to do?',
//     },
//     {
//     // Add an employee
//       type: 'input',
//       name: 'addEmployee',
//       message: 'What would you like to do?',
//     },
//     {
//     // Update an employee role
//       type: 'input',
//       name: 'update',
//       message: 'What would you like to do?',
//     },
//     {
//         type: "confirm",
//         name: "exit",
//         message: "Want to do anything else?",
//     },
// ];

const loadImage = () => {
  console.log(logo);
};

function init() {
  inquirer.prompt({
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
          value: "EXIT"
        }
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
        inquirer.prompt({
            type: "input",
            name: "addDept",
            message: "Enter the name of the new department.",
          })
          .then((answers) => {
            console.log(answers);
            const addDeptSQL = 'INSERT INTO department(name) VALUES("' + answers.addDept + '")';
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
        const deptChoices = [];
        // query db for all depts.
        const sql = `SELECT id, name FROM department`;
        db.query(sql, (err, rows) => {
          if (err) {
            console.log({ error: err.message });
            return;
          }
          console.table(rows);
          for (let i = 0; i < rows.length; i++) {
            deptChoices.push(rows[i].name);}
          }); 
      } else if (answer.choice === "ADD_ROLE") {
          // [{id:1, first_name:"john", last_name:"doe"}, {id:2, first_name:"jane", last_name:"doe"}]
          inquirer.prompt({
              type: "input",
              name: "addRole",
              message: "Enter the name, salary and department of the new role.",
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
        } else if (answer.choice === "ADD_EMP") {
        inquirer
          .prompt({
            type: "input",
            name: "addDept",
            message: "What would you like to do?",
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
      } else if (answer.choice === "UPDATE_EMP") {
        // query db for user id, first name & last name
        // query db for role id & role name
        const userChoices = [];
        const roleChoices = [];
        const userSQL = `Select id, first_name, last_name from employee`;
        db.query(userSQL, (err, rows) => {
          // [{id:1, first_name:"john", last_name:"doe"}, {id:2, first_name:"jane", last_name:"doe"}]
          if (err) {
            console.log({ error: err.message });
            return;
          }
          console.table(rows);
          init();
        });
      } else if (answer.choice === "EXIT") {
        console.log("Goodbye.");
        process.exit();
      }
    }); 
  };
  
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log(`Connection to employee_db established.`);
  init();
  })

