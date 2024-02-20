const { executePG } = require("../database/index");

async function listAll() {
  const result = await executePG(`SELECT * FROM visitantes;`);
  return result.rows;
}

async function create(data) {
  // name, password == cpf, profession, gender, age, cep, city, distric
  try {
    if (!data.user.name || data.user.name === "") {
      throw new Error("Name is required");
    }
    if (!data.user.cpf || data.user.cpf === "") {
      throw new Error("CPF is required");
    }
    if (!data.user.profession || data.user.profession === "") {
      throw new Error("profession is required");
    }
    if (!data.user.gender || data.user.gender === "") {
      throw new Error("gender is required");
    }
    if (!data.user.age || data.user.age === "") {
      throw new Error("age is required");
    }
    if (!data.user.cep || data.user.cep === "") {
      throw new Error("cep is required");
    }
    if (!data.user.city || data.user.city === "") {
      throw new Error("city is required");
    }
    if (!data.user.distric || data.user.distric === "") {
      throw new Error("distric is required");
    }

    const alreadyExists = await DB.execute(
      `SELECT * FROM users WHERE user_cpf = '${data.user.cpf}';`
    );
    if (alreadyExists.length > 0) {
      throw new Error("User already exists");
    }

    // bycrypt hash must go for cpf and name
    await DB.execute(
      `INSERT INTO ${table} (user_nome, user_cpf, user_profissao, user_genero, user_idade, user_cidade, user_bairro) VALUES (
        '${data.user.name}',
        '${data.user.cpf}',
        '${data.user.profession}',
        '${data.user.gender}, 
        '${data.user.age}', 
        '${data.user.cep}', 
        '${data.user.city}', 
        '${data.user.distric}')`
    );
  } catch (error) {
    message: error.message;
  }
}

module.exports = {
  listAll,
  create
};
