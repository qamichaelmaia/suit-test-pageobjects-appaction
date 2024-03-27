/// <reference types="cypress" />

class SignPage {
    get #nome() { return cy.get('[data-testid="firstName"]')}
    get #sobrenome() { return cy.get('[data-testid="lastName"]')}
    get #phone() { return cy.get('[data-testid="phone"]')}
    get #email() { return cy.get(':nth-child(7) > .css-175oi2r > [data-testid="email"]')}
    get #password() { return cy.get(':nth-child(8) > .css-175oi2r > [data-testid="password"]')}
    get #reenterPws() { return cy.get('[data-testid="repassword"]')}
    get #btnSign() { return cy.get('[data-testid="create"]')
}

    sign(nome, sobrenome, telefone, email, password, reenterPsw){
        this.#nome.type(nome)
        this.#sobrenome.type(sobrenome)
        this.#phone.type(telefone)
        this.#email.type(email)
        this.#password.type(password)
        this.#reenterPws.type(reenterPsw)
        this.#btnSign.click()
    }

}
module.exports = new SignPage();