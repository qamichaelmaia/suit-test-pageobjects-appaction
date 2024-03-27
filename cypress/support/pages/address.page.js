/// <reference types="cypress" />

class AddressPage {
    get #nome() { return cy.get(':nth-child(1) > .css-175oi2r > .css-11aywtz')}
    get #telefone() { return cy.get(':nth-child(2) > .css-175oi2r > .css-11aywtz')}
    get #endereço() { return cy.get(':nth-child(3) > .css-175oi2r > .css-11aywtz')}
    get #cidade() { return cy.get(':nth-child(4) > .css-175oi2r > .css-11aywtz')}
    get #estado() { return cy.get(':nth-child(5) > .css-175oi2r > .css-11aywtz')}
    get #cep() { return cy.get(':nth-child(6) > .css-175oi2r > .css-11aywtz')}
    get #btnSave() { return cy.get('[data-testid="save"]')
}

    sign(name, phone, address, city, country, zip){
        this.#nome.type(name)
        this.#telefone.type(phone)
        this.#endereço.type(address)
        this.#cidade.type(city)
        this.#estado.type(country)
        this.#cep.type(zip)
        this.#btnSave.click()
    }

}
module.exports = new AddressPage();