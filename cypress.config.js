const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // implement node event listeners here
  baseUrl: "http://lojaebac.ebaconline.art.br/",
  env: {
    EMAIL_EBAC: "aluno_ebac@teste.com",
    SENHA_VALIDA: "teste@teste.com",
  },
});
