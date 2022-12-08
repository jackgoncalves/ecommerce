import login from '../paginas/login/Login'
import site from '../paginas/login/Site'
import comprarProduto from '../paginas/compras/comprarProduto'

/// <reference types="Cypress" />

describe('Efetuar compra de um produto', function(){

    it('Adicionar produto carrinho', function(){

        var endereco = new site
        endereco.url()

        var loginSistema = new login
        loginSistema.fazerLogin()

        var addProdutoCarrinho = new comprarProduto

        addProdutoCarrinho.addCarrinho()
        addProdutoCarrinho.efetuarCompra()



    })
})