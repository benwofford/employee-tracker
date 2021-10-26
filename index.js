const inquirer = require('inquirer');
const fs = require('fs');
const express = require('express');

const mainPrompts = [
    {
    // Main Menu
      type: 'list',
      name: 'main',
      message: 'What would you like to do?',
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
      name: 'allDepartments',
      message: 'What would you like to do?',
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
      name: 'allRoles',
      message: 'What would you like to do?',
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
      name: 'allEmployees',
      message: 'What would you like to do?',
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
      name: 'addDepartment',
      message: 'What would you like to do?',
    },
    {
    // Add a role
      type: 'input',
      name: 'addRole',
      message: 'What would you like to do?',
    },
    {
    // Add an employee
      type: 'input',
      name: 'addEmployee',
      message: 'What would you like to do?',
    },
    {
    // Update an employee role
      type: 'input',
      name: 'update',
      message: 'What would you like to do?',
    },
    {
        type: "confirm",
        name: "exit",
        message: "Want to do anything else?",
    },
// .then((answer) => {
//     if (answer.mainPrompts) return init();
// });
];

// TODO: Add a department function
const deptName = `${answers.addDepartment}.json`;




// TODO: tidy up initialization prompt
function init() {
    inquirer.prompt(mainPrompts).then(async (answer) => {
        console.log(answer)
    });
};

init();