const address = {
    openMenu: (Name) => {
        // Implementação para abrir o menu
        // Por exemplo:
        cy.get(':nth-child(1) > .css-175oi2r > .css-11aywtz').click(); // Substitua '[data-testid="menu"]' pelo seletor correto do menu
        cy.contains(Name).click(); // Substitua 'menuName' pelo nome do menu que você deseja abrir
    },
    fillAddress: (nome, telefone, end1, cidade, estado, cep) => {
        // Implementação para preencher o endereço
        // Por exemplo:
        cy.get('[data-testid="nome"]').type(nome);
        cy.get('[data-testid="telefone"]').type(telefone);
        cy.get('[data-testid="endereco"]').type(end1);
        cy.get('[data-testid="cidade"]').type(cidade);
        cy.get('[data-testid="estado"]').type(estado);
        cy.get('[data-testid="cep"]').type(cep);
    }
};

module.exports = { address };
