const inquirer = require('inquirer');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();
​
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'employee_db'
},
    console.log(`Connection to employee_db established.`)
);

// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
  });
  ​
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });