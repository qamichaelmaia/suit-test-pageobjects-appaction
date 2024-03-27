const profilePage = require("../pages/profile.page");//Não necessário no momento

const checkoutActions = {
    
    //Entrarcom um login fixo
    login: (email, senha) => {
        cy.login(email, senha);
        cy.visit('/')
    },
    
    addProductToCart: () => {
        //Adicione um produto ao carrinho
        cy.get('[data-testid="search-products"]').click();
        cy.get('[style="padding: 8px;"] > :nth-child(1) > .r-18u37iz > :nth-child(1) > [data-testid="productDetails"]').click();
        cy.get('[data-testid="addToCart"]').click();
        cy.get('[data-testid="productName"]').click();
        cy.get('[style="justify-content: space-between; flex-grow: 1;"] > :nth-child(1) > .r-1wtj0ep > .r-1i6wzkk').click()
        cy.get('[style="background-color: rgb(242, 242, 242); display: flex;"] > :nth-child(1) > :nth-child(1) > .r-13awgt0 > .r-150rngu > :nth-child(1) > .r-14lw9ot > :nth-child(2) > .css-175oi2r > .css-146c3p1').click()
        cy.get('.r-14lw9ot > .css-175oi2r.r-1udh08x > :nth-child(1) > .css-175oi2r').click()
        cy.wait(1000);
    },

    addNewAddress: (nome, telefone, end1, cidade, estado, cep) => {
        //Adicione um novo endereço e finalize o checkout
        cy.get('.r-1d7mnkm > :nth-child(1) > .css-175oi2r > .css-11aywtz').clear().type(nome)
        cy.get(':nth-child(2) > .css-175oi2r > .css-11aywtz').clear().type(telefone)
        cy.get(':nth-child(3) > .css-175oi2r > .css-11aywtz').clear().type(end1);
        cy.get(':nth-child(4) > .css-175oi2r > .css-11aywtz').clear().type(cidade);
        cy.get(':nth-child(5) > .css-175oi2r > .css-11aywtz').clear().type(estado);
        cy.get(':nth-child(6) > .css-175oi2r > .css-11aywtz').clear().type(cep);
        cy.get('[data-testid="save"]').click()
        cy.wait(2000);
        cy.get('[style="background-color: rgb(242, 242, 242); display: flex;"] > :nth-child(1) > :nth-child(1) > .r-13awgt0 > :nth-child(1) > .r-1awozwy > [data-testid="back"] > .css-146c3p1').click()
        cy.wait(1000);
        cy.get('[data-testid="selectAddressOrContinueToPayment"]').click()
        cy.wait(1000);
        cy.get('[data-testid="completeCheckout"]').click()
        cy.wait(1000)
    },

    verifyMessage: () => {
        //Verifique a mensagem de confirmação do checkout
        cy.get('[style="background-color: rgb(242, 242, 242); display: flex;"] > :nth-child(1) > :nth-child(1) > .r-13awgt0 > :nth-child(1) > .css-175oi2r > .css-146c3p1').should('have.text', 'Order Success')
        cy.get('[data-testid="goBackHome"]').should('have.text', 'Go Back Home')
    },

    backHome: ()=> {
        //Volte a página inicial
        cy.get('[data-testid="goBackHome"]').click()
        cy.wait(1000)
        cy.get('[style="color: rgb(255, 255, 255); font-size: 20px; font-family: Montserrat-Bold;"]').should('have.text', 'EBAC Store')
  
    }
};

module.exports = checkoutActions;
