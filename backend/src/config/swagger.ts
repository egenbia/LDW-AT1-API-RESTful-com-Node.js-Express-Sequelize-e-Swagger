import swaggerJSDoc from "swagger-jsdoc";

const options: swaggerJSDoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API de Catálogo Funko Pop - Game of Thrones",
      version: "1.0.0",
      description:
        "API RESTful para gerenciamento de um catálogo de Funko Pops de Game of Thrones, com persistência em PostgreSQL via Sequelize.",
    },
    servers: [
      {
        url: "http://localhost:3000",
        description: "Servidor local",
      },
    ],
    tags: [
      {
        name: "FunkoPop",
        description: "Operações relacionadas ao catálogo de Funko Pops",
      },
    ],
    components: {
      schemas: {
        FunkoPop: {
          type: "object",
          properties: {
            id: { type: "integer", example: 1 },
            personagem: { type: "string", example: "Jon Snow" },
            casa: { type: "string", example: "Stark" },
            numeroColecao: { type: "integer", example: 101 },
            preco: { type: "number", format: "float", example: 89.9 },
            emEstoque: { type: "boolean", example: true },
            createdAt: { type: "string", format: "date-time" },
            updatedAt: { type: "string", format: "date-time" },
          },
        },
        FunkoPopInput: {
          type: "object",
          required: ["personagem", "casa", "numeroColecao", "preco"],
          properties: {
            personagem: { type: "string", example: "Jon Snow" },
            casa: { type: "string", example: "Stark" },
            numeroColecao: { type: "integer", example: 101 },
            preco: { type: "number", format: "float", example: 89.9 },
            emEstoque: { type: "boolean", example: true },
          },
        },
      },
    },
  },
  apis: ["./src/routes/*.ts"], // onde o swagger-jsdoc vai procurar as anotações @swagger
};

export const swaggerSpec = swaggerJSDoc(options);
