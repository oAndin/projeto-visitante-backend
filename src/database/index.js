const mysql = require("mysql2/promise");
const { Pool } = require("pg");

async function executeSql(sql) {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "visitante_db",
    port: 3307,
  });
  const [result] = await connection.query(sql);
  return result;
}

// const connectionPg = new Pool({
//   connectionString:
//     "postgres://museu_user:g5AihOuBpfZG2DH7jCoMwtZncEkFPZWg@dpg-cn2c55ed3nmc739c9d70-a.oregon-postgres.render.com/museu_db_m5dc",
//   ssl: {
//     rejectUnauthorized: false,
//   },
// });

const executePG = async (sql) => await connectionPg.query(sql);

module.exports = {
  executeSql,
  executePG,
};
