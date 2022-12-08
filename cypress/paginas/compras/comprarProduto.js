

class comprarProduto {

    addCarrinho(){

        cy.get('.inventory_item_name').contains('Sauce Labs Onesie').click()
        cy.get('.inventory_details_name.large_size').should('have.text','Sauce Labs Onesie')

        cy.get('#add-to-cart-sauce-labs-onesie').click()
        cy.get('a.shopping_cart_link').click()

        cy.get('.inventory_item_name').should('have.text','Sauce Labs Onesie')
        cy.get('#checkout').click()

    }

    efetuarCompra(){

        cy.get('#first-name').type('Jack')
        cy.get('#last-name').type('Gonca')
        cy.get('#postal-code').type('82828282')

        cy.get('#continue').click()

        cy.get('.inventory_item_name').should('have.text', 'Sauce Labs Onesie')
        cy.get('#finish').click()

        cy.get('.complete-header').should('have.text', 'THANK YOU FOR YOUR ORDER')

    }


}

export default comprarProduto;