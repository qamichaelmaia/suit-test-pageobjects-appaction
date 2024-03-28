/// <reference types="cypress" />

const loginData = require("../fixtures/example.json");
const { nome, telefone, end1, cidade, estado, cep } = require("../fixtures/checkout.json");//Não necessário no momento
const checkoutActions = require("../support/actions/checkoutActions");

describe("Teste de Checkout", () => {
    let email, senha;
    let nome = "João Pimenta";
    let telefone = "77778888888";
    let end1 = "Cristal Lake";
    let cidade = "Baldur's Gate";
    let estado = "Bahia";
    let cep = "44789000";

    before(() => {
        // Executa apenas uma vez antes de todos os testes
        email = loginData.email;
        senha = loginData.senha;
        cy.setCookie("ebacStoreVersion", "v2", { domain: "lojaebac.ebaconline.art.br" });//Cookie selecionado para o site
        cy.visit("/");
        
        checkoutActions.login(email, senha);// Realiza o login uma vez
    });

    context('Checkout completo', () => {

        it('Deve fazer o checkout de produto', () => {
            checkoutActions.addProductToCart();//Adicionando produto
            checkoutActions.addNewAddress(nome, telefone, end1, cidade, estado, cep);//Adicionando novo endereço
            checkoutActions.verifyMessage();//Verificando confirmação de checkout
            checkoutActions.backHome();//Voltando para página inicial
        });
    });
});
