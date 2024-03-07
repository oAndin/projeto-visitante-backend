const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger_output.json'
const endpointsFiles = ['./index.js']

const doc = {
    host: "localhost:8080",
    info: {
        version: "1.0.0",
        title: "Visitante API",
        description: "API para gerenciamento de visitantes",
    },
    definitions: {
        Visitante: {
            $visitante_nome:"Fulano",
            $visitante_cpf:"000.000.000-00",
            $visitante_profissao:"Garoto de Programa",
            $visitante_cidade: "Fortaleza",
            $visitante_bairro: "Beira Mar",
            $visitante_genero: "0",
            $visitante_data: "2024-03-01 12:00:00",
            $visitante_status: false,
        }
    }
}

swaggerAutogen(outputFile, endpointsFiles, doc)