/// <reference types="cypress" />
import EnderecoPage from "../support/page-objects/endereco.page"
import dados from "../fixtures/endereco.json"
import dadosEntrega from "../fixtures/enderecoEntrega.json"

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

  it('Deve fazer cadastro de faturamento com sucesso, usando arquivo de dados', () => {
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

  it('Deve editar endereço de entrega', () => {
    EnderecoPage.editarEnderecoEntrega(
      dadosEntrega[1].nome,
      dadosEntrega[1].sobrenome,
      dadosEntrega[1].empresa,
      dadosEntrega[1].pais,
      dadosEntrega[1].endereco,
      dadosEntrega[1].numero,
      dadosEntrega[1].cidade,
      dadosEntrega[1].estado,
      dadosEntrega[1].cep
    )
  })
})
