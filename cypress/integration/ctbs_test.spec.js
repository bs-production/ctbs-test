describe('CTBS head and H1 test', () => {
  it('Check for title, description, H1', () => {
   cy.visit('https://www.connecticutbasementsystems.com');
   cy.title().should('eq', 'Basement Waterproofing in CT | Basement Finishing, Foundation Repair in CT, Westchester, NY, Stamford, Norwalk, West Hartford, Danbury')
   cy.get('h1').should('be.visible')
   cy.get('head meta[name="description"]')
   .should("have.attr", "content", "Connecticut Basement Systems waterproofs wet basements and crawl spaces. Get our Free cost estimates in Stamford, Norwalk, West Hartford and the nearby areas.");
  })

})
