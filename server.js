
const inquirer = require('inquirer');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'employee_db'
});

connection.connect((err) => {
  if(err) {
    throw err;
  }
  console.log(`Connection to employee_db established.`)
});

// View all departments
// app.get('/api/departments', (req, res) => {
//     const sql = `SELECT id, department_name FROM department`;
    
//     db.query(sql, (err, rows) => {
//       if (err) {
//         res.status(500).json({ error: err.message });
//          return;
//       }
//       res.json({
//         message: 'success',
//         data: rows
//       });
//     });
//   });

// View all roles
// app.get('/api/roles', (req, res) => {
//     const sql = `SELECT id, title, salary, department_id FROM role`;
    
//     db.query(sql, (err, rows) => {
//       if (err) {
//         res.status(500).json({ error: err.message });
//          return;
//       }
//       res.json({
//         message: 'success',
//         data: rows
//       });
//     });
//   });

// View all employees
// app.get('/api/employee', (req, res) => {
//     const sql = `SELECT id, first_name, last_name FROM employee`;
// // TODO: connect employee & role in query.sql to get salary, job title, department & managers.
//     db.query(sql, (err, rows) => {
//       if (err) {
//         res.status(500).json({ error: err.message });
//          return;
//       }
//       res.json({
//         message: 'success',
//         data: rows
//       });
//     });
//   });

// Add a department
app.post('/api/new-department', (req, res) => {
    const department_name = req.body.department_name;
    const sql = `INSERT INTO department (department_name)
      VALUES (?)`;
    
    db.query(sql, department_name, (err, result) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      res.json({
        message: 'success',
        data: req.body
      });
    });
  });

// Add a role
  app.post('/api/new-role', (req, res) => {
    const role_title = req.body.role_title;
    const role_salary = req.body.role_salary;
    const role_department = req.body.department_id;
    const sql = `INSERT INTO role (role_title)
      VALUES (?)`;
// TODO: is this correct for data insertion?
    db.query(sql, role_title, role_salary, role_department, (err, result) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      res.json({
        message: 'success',
        data: req.body
      });
    });
  });

// Add an employee
app.post('/api/new-employee', (req, res) => {
    const employee_first_name = req.body.employee_first_name;
    const employee_last_name = req.body.employee_last_name;
    const employee_role_id = req.body.employee_role_id;
    const employee_manager_id = req.body.manager_id;
    const sql = `INSERT INTO employee (employee_name)
      VALUES (?)`;
// TODO: is this correct for data insertion?
    db.query(sql, [employee_first_name, employee_last_name, employee_role_id, employee_manager_id], (err, result) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      res.json({
        message: 'success',
        data: req.body
      });
    });
  });

// Update employee role
app.put('/api/employee/:id', (req, res) => {
    const sql = `UPDATE employee SET role_id = ? WHERE id = ?`;
    const params = [req.body.role_id, req.params.id];
// TODO: is this correct for data insertion?  ​
    db.query(sql, params, (err, result) => {
      if (err) {
        res.status(400).json({ error: err.message });
      } else if (!result.affectedRows) {
        res.json({
          message: 'Employee not found'
        });
      } else {
        res.json({
          message: 'success',
          data: req.body,
          changes: result.affectedRows
        });
      }
    });
  });