const mysql = require("mysql2");
const util = require("util");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "employee_db",
});

connection.query = util.promisify(connection.query);

module.exports = connection;
