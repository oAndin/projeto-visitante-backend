const mysql = require("mysql");

async function executeSql(sql) {
  const connection = await mysql.createConnection({
    host: "3306",
    user: "adm",
    password: "1234",
    database: "visitante_db",
    port: 3306 || 3007,
  });
  const [result] = await connection.query(sql);
  return result;
}

module.exports = {
  executeSql,
};
