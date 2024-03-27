/// <reference types="cypress" />

const { homePage } = require("../support/pages/home.page");
const signPage = require("../support/pages/sign.page");
const { nome, sobrenome, telefone, email, password, reenterPsw, } = require("../fixtures/data.json");
const { profilePage } = require("../support/pages/profile.page");

describe("Fluxo de criação de conta", () => {
    beforeEach(() => {
        cy.setCookie("ebacStoreVersion", "v2", {domain: "lojaebac.ebaconline.art.br",});
        cy.visit("/");
    });
    it("Deve criar conta com sucesso", () => {
        homePage.openMenu("Account");
        cy.get('[data-testid="signUp"]').click();
        signPage.sign(nome, sobrenome, telefone, email, password, reenterPsw); //informações buscadas em fixure, alterar e-mail pois está sem faker

        cy.get('[href="/Tab/Account"]').click()
        profilePage.customerName().should('have.text', 'Maia Michael')

    });
});
