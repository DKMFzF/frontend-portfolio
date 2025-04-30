describe('Global Service test', () => {
	it('Service availability in localhost:8081', () => {
		cy.visit('http://localhost:8081');
	});
});
