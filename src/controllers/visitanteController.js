const { executePG } = require("../database/index");

async function listAll() {
  const result = await executePG(`SELECT * FROM visitantes;`);
  return result.rows;
}

module.exports = {
  listAll,
};
