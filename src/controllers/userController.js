const DB = require("../database/index");

const table = "users";

async function create(data) {
  // name, password == cpf, profession, gender, age, cep, city, distric
  try {
    if (!data.user.name || data.user.name === "") {
      throw new Error("Name is required");
    }
    if (!data.user.cpf || data.user.cpf === "") {
      throw new Error("cpf is required");
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
  } catch (error) {
    message: error.message;
  }
}
