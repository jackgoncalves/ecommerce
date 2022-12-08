


class site{

    url(){
        cy.visit('https://www.saucedemo.com/')
        cy.title().should('be.equal', 'Swag Labs')
    }
}

export default site;