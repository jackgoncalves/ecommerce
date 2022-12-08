import login from '../paginas/login/Login'
import site from '../paginas/login/Site'

/// <reference types="Cypress" />


describe('Acessar site SwagLabs', function () {

    it('Acessar sistema para automação', function () {
        var endereco = new site

        endereco.url()

    })

    it('Efetuar login', function () {
        var loginSistema = new login

        loginSistema.fazerLogin()

    })

})

