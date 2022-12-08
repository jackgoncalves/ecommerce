


class login {

    fazerLogin(){

        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()

        cy.get('span[class="title"]').should('have.text', 'Products')
    }

}

export default login;