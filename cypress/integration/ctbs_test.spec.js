const siteName = "https://www.connecticutbasementsystems.com";

describe('CTBS head and H1 test', () => {
  it('Check for title, description, H1', () => {
   cy.visit(siteName);
   cy.get('h1').should('be.visible');
  })

})

describe('Basic Data Layer Checks', () => {
  it('has a dataLayer and loads GTM', () => {
    cy.visit(siteName)
    cy.window().then((window) => {
      assert.isDefined(window.dataLayer, 
        'window.dataLayer is defined');

      assert.isDefined(
        window.dataLayer.find(x => x.event === "gtm.js"), 
        "GTM is loaded");
    })
  });
});
