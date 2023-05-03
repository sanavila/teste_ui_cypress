/// <reference types="cypress" />
import EnderecoPage from "../support/page-objects/endereco.page"
import dados from "../fixtures/endereco.json"

describe('Funcionalidade endereços ~ Faturamento e entrega', () => {
  beforeEach(() => {
    cy.visit('minha-conta')
    cy.fixture('perfil').then(dados => {
      cy.login(dados.usuario, dados.senha)
    })
  })

  it('Deve fazer cadastro de faturamento com sucesso', () => {
    EnderecoPage.editarEnderecoFaturamento(
      'Sabrina',
      'Mendes',
      'Ebac',
      'Brasil',
      'Av. São João',
      '123',
      'Caucaia',
      'Ceara',
      '61604280',
      '85999887744',
      'email.ebac@ebac.com'
    )
    cy.get('.woocommerce-message').contains('Endereço alterado com sucesso.', { matchCase: false })
  })

  it('Deve fazer cadastro de faturamento com sucesso', () => {
    EnderecoPage.editarEnderecoFaturamento(
      dados[0].nome,
      dados[0].sobrenome,
      dados[0].empresa,
      dados[0].pais,
      dados[0].endereco,
      dados[0].numero,
      dados[0].cidade,
      dados[0].estado,
      dados[0].cep,
      dados[0].telefone,
      dados[0].email
      )
    cy.get('.woocommerce-message').contains('Endereço alterado com sucesso.', { matchCase: false })
  })
})
