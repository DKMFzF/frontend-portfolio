describe('AppHeaderUI navigation', () => {
	context('Desktop navigation', () => {
		beforeEach(() => {
			cy.viewport(1440, 900);
			cy.visit('/');
		});

		it('should display the logo and navigate to About Me', () => {
			cy.get('[data-cy=link-portfolio]').should('be.visible').click();

			cy.location('pathname').should('eq', '/');
		});

		it('should navigate to portfolio page', () => {
			cy.get('a[href="/frontend-portfolio"]')
				.should('be.visible')
				.click();

			cy.location('pathname').should('eq', '/frontend-portfolio');
		});

		it('should download resume file', () => {
			cy.get('a[download]')
				.should('have.attr', 'href')
				.and('match', /\.(pdf)$/);
		});
	});

	context('Mobile navigation (burger menu)', () => {
		beforeEach(() => {
			cy.viewport(375, 667);
			cy.visit('/');
		});

		it('should open mobile menu', () => {
			cy.get('button[class*=burger-button]').click();

			cy.get('nav[class*=mobile-menu-content]').should('be.visible');
		});

		it('should navigate to About Me from mobile menu', () => {
			cy.get('button[class*=burger-button]').should('be.visible').click();

			cy.get('nav[class*=mobile-menu-content]').should('be.visible');

			cy.get('nav[class*=mobile-menu-content]')
				.contains('About Me')
				.should('be.visible')
				.click();

			cy.location('pathname').should('eq', '/');
		});

		it('should navigate to portfolio from mobile menu', () => {
			cy.get('button[class*=burger-button]').should('be.visible').click();

			cy.get('nav[class*=mobile-menu-content]')
				.contains('portfolio')
				.should('be.visible')
				.click();

			cy.location('pathname').should('eq', '/frontend-portfolio');
		});

		it('should close mobile menu on overlay click', () => {
			cy.get('button[class*=burger-button]').click();

			cy.get('div[class*=overlay]')
				.should('be.visible')
				.click({ force: true });

			cy.get('nav[class*=mobile-menu-content]').should('not.exist');
		});
	});
});
