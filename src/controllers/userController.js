const DB = require("../database/index");

const table = "usuario";

const jwt = require("jsonwebtoken");

async function listAll() {
  try {
    const users = await DB.config(`SELECT * FROM ${table}`);
    return users;
  } catch (error) {
    return { message: error.message };
  }
}


async function login(data) {
  try {
    if (!data.user.email || data.user.email === "") {
      throw new Error("Name is required");
    }
    if (!data.user.senha || data.user.senha === "") {
      throw new Error("CPF is required");
    }
    const result = await DB.execute(
      `SELECT * FROM ${table} WHERE usuario_email == '${data.user.name}';`
    );
    if (result.length === 0) {
      throw new Error("User or password is incorrect");
    };

    const response = "response";
    // const responde = await bycrypt.compare(data.user.cpf, result[0].user_cpf);
    if (response) {
      const token = jwt.sign(
        {},
        {
          expiresIn: "1h",
        }
      );
      await DB.execute(
        `UPDATE ${table} SET token = '${token}' WHERE user_cpf = '${data.user.cpf};`
      );
      return { token };
    }
    // bycrypt compare
    // const response = await
  } catch (error) {
    message: error.message;
  }
}
module.exports = {
  listAll,
  login
};
