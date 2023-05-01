/// <reference types='cypress' />
import { faker } from '@faker-js/faker';

context('Funcionalidade login', () => {

  beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
  })

  it('Deve fazer login com sucesso', () => {
    cy.get('#username').type(Cypress.env('EMAIL_EBAC'))
    cy.get('#password').type(Cypress.env('SENHA_VALIDA'))
    cy.get('[name="login"]').click()
    cy.get('.page-title').contains('minha conta', { matchCase: false })
  })

  it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {
    cy.get('#username').type(faker.internet.email())
    cy.get('#password').type(faker.internet.password(20))
    cy.get('[name="login"]').click()
    cy.get('.woocommerce-error > li').contains('endereço de e-mail', { matchCase: false })
  })

  it('Deve exibir uma mensagem de erro ao inserir senha inválida', () => {
    cy.get('#username').type(Cypress.env('EMAIL_EBAC'))
    cy.get('#password').type(faker.internet.password(3))
    cy.get('[name="login"]').click()
    cy.get('.woocommerce-error > li').contains('a senha fornecida para o e-mail', { matchCase: false })
  })
})