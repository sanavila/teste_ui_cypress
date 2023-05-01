/// <reference types="cypress" />

describe("Funcionalidade Página de produtos", () => {
  beforeEach(() => {
    cy.visit("http://lojaebac.ebaconline.art.br/produtos/");
  });

  it("Deve selecionar um produto da lista", () => {
    cy.get('[class="product-block grid"]')
      //.first()
      //.last()
      .eq(3)
      .click();
  });

  it("Deve adicionar um produto ao carrinho", () => {
    cy.get('[class="product-block grid"]')
      .contains('Abominable Hoodie')
      .click();
    cy.get(".button-variable-item-M").click();
    cy.get(".button-variable-item-Red").click();
    cy.get(".input-text")
    .clear()  
    .type(2);
    cy.get(".single_add_to_cart_button").click();
    cy.get('.mini-cart-items').should('contain', 2)
    cy.get('.woocommerce-message').contains(' 2 × “Abominable Hoodie” foram adicionados no seu carrinho.')
  });
});
