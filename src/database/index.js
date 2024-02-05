const mysql = require("mysql");

async function executeSql(sql) {
  const connection = await mysql.createConnection({
    host: "",
    user: "",
    password: "",
    database: "",
    port: 3306 || 3007,
  });
  const [result] = await connection.query(sql);
  return result;
}

module.exports = {
  executeSql,
};
