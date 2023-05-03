// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (usuario, senha) => { 
  cy.get('#username').type(usuario)
  cy.get('#password').type(senha, {log: false})
  cy.get('[name="login"]').click()
})

Cypress.Commands.add('preCadastro', (email, senha, nome, sobrenome) => {
  cy.get('[type="email"]').type(email)
  cy.get('#reg_password').type(senha)
  cy.get('[name="register"]').click()
  cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a')
  .contains('Detalhes da conta', { matchCase: false })
  .click()
  cy.get('#account_first_name').type(nome)
  cy.get('#account_last_name').type(sobrenome)
  cy.get('.woocommerce-Button').click()
  cy.get('.woocommerce-message').contains('Detalhes da conta modificados', { matchCase: false })  
})

Cypress.Commands.add('addProdutos', (quantidade, produto) => {
  cy.get('[class="product-block grid"]')
      .contains(produto)
      .click();
    cy.get(".button-variable-item-M").click();
    cy.get(".button-variable-item-Red").click();
    cy.get(".input-text")
    .clear()  
    .type(quantidade);
    cy.get(".single_add_to_cart_button").click();
    cy.get('.mini-cart-items').should('contain', quantidade)
    cy.get('.woocommerce-message').contains(`${quantidade} × “Abominable Hoodie” foram adicionados no seu carrinho.`)
})
