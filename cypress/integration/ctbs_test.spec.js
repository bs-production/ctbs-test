describe('CTBS head and H1 test', () => {
  it('Check for title, description, H1', () => {
   cy.visit('https://www.connecticutbasementsystems.com');
   cy.title().should('be.visible');
   cy.get('h1').should('be.visible');
   cy.get('head meta[name="description"]').should('be.visible');
  })

})

describe('Basic Data Layer Checks', () => {
  it('has a dataLayer and loads GTM', () => {
    cy.visit('https://www.connecticutbasementsystems.com')
    cy.window().then((window) => {
      assert.isDefined(window.dataLayer, 
        'window.dataLayer is defined');

      assert.isDefined(
        window.dataLayer.find(x => x.event === "gtm.js"), 
        "GTM is loaded");
    })
  });
});
