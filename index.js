const inquirer = require('inquirer');
const fs = require('fs');

const mainPrompts = [
    {
    // Main Menu
      type: 'list',
      message: 'What would you like to do?',
      name: 'main',
      choices: [
          'View all departments', 
          'View all roles', 
          'View all employees', 
          'Add a department', 
          'Add a role', 
          'Add an employee', 
          'Update an employee role',
        ],
    },
    {
    // View all departments
      type: 'list',
      message: 'What would you like to do?',
      name: 'allDepartments',
      choices: [
          'Sales',
          'Engineering',
          'Finance',
          'Legal',
        ],
    },
    {
    // View all roles
      type: 'list',
      message: 'What would you like to do?',
      name: 'allRoles',
      choices: [
          'Sales Lead',
          'Salesperson',
          'Lead Engineer',
          'Software Engineer',
          'Account Manager',
          'Accountant',
          'Legal Team Lead',
        ],
    },
    {
    // View all employees
      type: 'list',
      message: 'What would you like to do?',
      name: 'allEmployees',
      choices: [
          'Frank Reynolds',
          'Dennis Reynolds',
          'Ronald McDonald',
          'The Waitress',
          'Matthew Mara',
          'Deandra Reynolds',
          'Liam McPoyle',
          'Charlie Kelly',
      ],
    },
    {
    // Add department
      type: 'input',
      message: 'What would you like to do?',
      name: 'addDepartment',
    },
    {
    // Add a role
      type: 'input',
      message: 'What would you like to do?',
      name: 'addRole',
    },
    {
    // Add an employee
      type: 'input',
      message: 'What would you like to do?',
      name: 'addEmployee',
    },
    {
    // Update an employee role
      type: 'input',
      message: 'What would you like to do?',
      name: 'update',
    },
  ];

// TODO: Is this right?
const exit = () =>
  inquirer.prompt([
      {
          type: "confirm",
          message: "Want to do anything else?",
          name: "exit",
      },
  ])
  .then((answer) => {
      if (answer.moreQuery) return init();
  });

//   .then((data) => {
//     const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;

//     fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
//       err ? console.log(err) : console.log('Success!')
//     );
//   })

// TODO: tidy up initialization prompt
function init() {
    inquirer.prompt(mainPrompts).then(async (answer) => {
        console.log(answer)
    });
};