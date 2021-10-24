const inquirer = require('inquirer');
const fs = require('fs');

const mainPrompts = [
    {
      type: 'list',
      message: 'What would you like to do?',
      name: 'main',
      choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role'],
    },
    {
    // TODO: View all departments
      type: '',
      message: '',
      name: '',
      choices: '',
    },
    {
    // TODO: View all roles
      type: '',
      message: '',
      name: '',
      choices: '',
    },
    {
    // TODO: View all employees
      type: '',
      message: '',
      name: '',
      choices: '',
    },
    {
    // TODO: Add a department
      type: '',
      message: '',
      name: '',
      choices: '',
    },
    {
    // TODO: Add a role
      type: '',
      message: '',
      name: '',
      choices: '',
    },
    {
    // TODO: Add an employee
      type: '',
      message: '',
      name: '',
      choices: '',
    },
    {
    // TODO: Update an employee role
      type: '',
      message: '',
      name: '',
      choices: '',
    },
  ]
//   .then((data) => {
//     const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;

//     fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
//       err ? console.log(err) : console.log('Success!')
//     );
//   })
  
userInput(mainPrompts);