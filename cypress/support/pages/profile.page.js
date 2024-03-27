const profilePage = {
    customerName: () => {
        return cy.get('[data-testid="customer-name"]');
    }
};

module.exports = profilePage;
