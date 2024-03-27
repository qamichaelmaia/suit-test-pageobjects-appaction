const profilePage = {
    customerName: () => {
        return cy.get('[data-testid="CustomerName"]').should('have.text','Maia Michael');
    }
};

module.exports = profilePage;
