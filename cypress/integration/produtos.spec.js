/// <reference types="cypress" />

describe("Funcionalidade Página de produtos", () => {
  beforeEach(() => {
    cy.visit('produtos');
  });

  it("Deve selecionar um produto da lista", () => {
    cy.get('[class="product-block grid"]')
      .eq(3)
      .click();
  });

  it("Deve adicionar um produto ao carrinho", () => {
    var quantidade = 5
    cy.get('[class="product-block grid"]')
      .contains('Abominable Hoodie')
      .click();
    cy.get(".button-variable-item-M").click();
    cy.get(".button-variable-item-Red").click();
    cy.get(".input-text")
    .clear()  
    .type(quantidade);
    cy.get(".single_add_to_cart_button").click();
    cy.get('.mini-cart-items').should('contain', quantidade)
    cy.get('.woocommerce-message').contains(`${quantidade} × “Abominable Hoodie” foram adicionados no seu carrinho.`)
  });

  it.only('Deve adicionar produtos ao carrinho usando comando customizado', () => {
    cy.addProdutos(3, 'Abominable Hoodie')
  })
});
