const inquirer = require('inquirer');
const fs = require('fs');

// const mainPrompts = [
//     {
//     // Main Menu
//       type: 'list',
//       name: 'main',
//       message: 'What would you like to do?',
//       choices: [
//           'View all departments', 
//           'View all roles', 
//           'View all employees', 
//           'Add a department', 
//           'Add a role', 
//           'Add an employee', 
//           'Update an employee role',
//         ],
//     },
//     {
//     // View all departments
//       type: 'list',
//       name: 'allDepartments',
//       message: 'What would you like to do?',
//       choices: [
//           'Sales',
//           'Engineering',
//           'Finance',
//           'Legal',
//         ],
//     },
//     {
//     // View all roles
//       type: 'list',
//       name: 'allRoles',
//       message: 'What would you like to do?',
//       choices: [
//           'Sales Lead',
//           'Salesperson',
//           'Lead Engineer',
//           'Software Engineer',
//           'Account Manager',
//           'Accountant',
//           'Legal Team Lead',
//         ],
//     },
//     {
//     // View all employees
//       type: 'list',
//       name: 'allEmployees',
//       message: 'What would you like to do?',
//       choices: [
//           'Frank Reynolds',
//           'Dennis Reynolds',
//           'Ronald McDonald',
//           'The Waitress',
//           'Matthew Mara',
//           'Deandra Reynolds',
//           'Liam McPoyle',
//           'Charlie Kelly',
//       ],
//     },
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

// TODO: prompt to end function? (on each prompt)


// TODO: tidy up initialization prompt
function init() {
    inquirer.prompt({
      // Main Menu
        type: 'list',
        name: 'main',
        message: 'What would you like to do?',
        choices: [
            {
              name: 'View all departments',
              value: 'VIEW_DEPT',
            }, 
            {
              name: 'View all roles',
              value: 'VIEW_ROLES'
            },
            {
              name: 'View all employees',
              value: 'VIEW_EMP' 
            },
            {
              name: 'Add a department',
              value: 'ADD_DEPT'
            },
            {
              name: 'Add a role',
              value: 'ADD_ROLE'
            },
            {
              name: 'Add an employee',
              value: 'ADD_EMP'
            },
            {
              name: 'Update an employee role',
              value: 'UPDATE'
            }
          ],
      })
      .then(async (answer) => {
        console.log(answer)
        if (answer.choice === "VIEW_DEPT") {
          // query db for all depts.
          const sql = `SELECT id, department_name FROM department`;
    
          db.query(sql, (err, rows) => {
            if (err) {
              console.log({ error: err.message });
               return;
            }
            console.table(rows)
          })
        } else if (answer.choice === "VIEW_ROLES") {
          // query db for all roles
            const sql = `SELECT id, title, salary, department_id FROM role`;
            
            db.query(sql, (err, rows) => {
              if (err) {
                console.log({ error: err.message });
                 return;
              };
              console.table(rows)
              });
        } else if (answer.choice === "VIEW_EMP") {
          // query db for all employees
            const empSQL = `SELECT id, first_name, last_name FROM employee`;
            const roleSQL = 'SELECT title, salary, department_id FROM role';
            db.query(sql, (err, rows) => {
              if (err) {
                console.log({ error: err.message });
                 return;
            };
              console.table(rows)
          });
        } else if (answer.choice === "ADD_DEPT") {
          
          // call .fs to write to db?

        } else if (answer.choice === "ADD_ROLE") {

        } else if (answer.choice === "ADD_EMP") {

        } else if (answer.choice === "UPDATE_EMP") {
          // query db for user id, first name & last name
          // query db for role id & role name
          const userChoices = [];
          const roleChoices = [];
          const userSQL = `Select id, first_name, last_name from employee`
          db.query(userSQL, (err, rows) => {
            // [{id:1, first_name:"john", last_name:"doe"}, {id:2, first_name:"jane", last_name:"doe"}]
            if (err) {
              console.log({ error: err.message });
               return;
            }
            console.table(rows)
          })
        }
    });
};

init();