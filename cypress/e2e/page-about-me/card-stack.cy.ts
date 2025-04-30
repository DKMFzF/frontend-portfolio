describe('Knowledge Sidebar', () => {
	it('Active btn card stack in page about me', () => {
		cy.visit('/');

		cy.get('[data-cy=card-title]').contains('React');

		cy.get('[data-cy=card-btn-right]').click();
		cy.get('[data-cy=card-title]').contains('JS/TS');

		cy.get('[data-cy=card-btn-left]').click();
		cy.get('[data-cy=card-title]').contains('React');
	});
});
