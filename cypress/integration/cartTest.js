describe('Shopping cart tests', () => {
    it('running test', () => {
        cy.visit('http://localhost:8080/shop')
        .get('.MuiGrid-item').should('have.length', 5)
    });
})