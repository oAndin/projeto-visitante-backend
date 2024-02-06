const DB = require("../database/index");

const table = "users";

async function listAll() {
  try {
    const users = await DB.execute(`SELECT * FROM ${table}`);
    return users;
  } catch (error) {
    return { message: error.message };
  }
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
      `INSERT INTO ${table} (user_name, user_cpf, user_profession, user_gender, user_age, user_cep, user_city, user_distric) VALUES (
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

async function login(data) {
  try {
    if (!data.user.name || data.user.name === "") {
      throw new Error("Name is required");
    }
    if (!data.user.cpf || data.user.cpf === "") {
      throw new Error("CPF is required");
    }
    const result = await DB.execute(
      `SELECT * FROM ${table} WHERE user_name == '${data.user.name}';`
    );
    if (result.length === 0) {
      throw new Error("User or password is incorrect");
    }

    // bycrypt compare 
    const response = await 
  } catch (error) {
    message: error.message;
  }
}
