/// <reference types="cypress" />
import { faker } from '@faker-js/faker';

describe('Funcionalidade Pré Cadastro', () => {

  beforeEach(() => {
    cy.visit('minha-conta',)
  })

  it('Deve completar o pré cadastro com sucesso', () => {
    cy.get('[type="email"]').type(faker.internet.email())
    cy.get('#reg_password').type(faker.internet.password(16))
    cy.get('[name="register"]').click()
    cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a')
    .contains('Detalhes da conta', { matchCase: false })
    .click()
    cy.get('#account_first_name').type(faker.name.firstName())
    cy.get('#account_last_name').type(faker.name.lastName())
    cy.get('.woocommerce-Button').click()
    cy.get('.woocommerce-message').contains('Detalhes da conta modificados', { matchCase: false })
  })

  it('Deve completar o pré-cadastro usando comando customizados', () => {
    let nomeFake = faker.name.firstName()
    cy.preCadastro(
      faker.internet.email(nomeFake),
      faker.internet.password(),
      nomeFake,
      faker.name.lastName(),
      )
    cy.get('.woocommerce-message').contains('Detalhes da conta modificados', { matchCase: false })
    })
})
