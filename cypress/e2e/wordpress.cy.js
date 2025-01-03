describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost')
    


    /* ==== Generated with Cypress Studio ==== */
    cy.get('#language-continue').click();
    cy.get('#weblog_title').clear();
    cy.get('#weblog_title').type('google');
    cy.get('#user_login').clear();
    cy.get('#user_login').type('adityakumarspn');
    cy.get('#pass1').clear();
    cy.get('#pass1').type('Adity@1234');
    cy.get('.pw-checkbox').check();
    cy.get('#admin_email').clear();
    cy.get('#admin_email').type('Adityakumarspn555@gmail.com');
    cy.get('#blog_public').check();
    cy.get('#submit').click();
    cy.wait(2000)
    cy.get('a').click();
    cy.get('#user_login').clear();
    cy.get('#user_login').type('adityakumarspn');
    cy.get('#user_pass').clear();
    cy.get('#user_pass').type('Adity@1234');
    cy.get('.dashicons').click();
    cy.get('#wp-submit').click();
    cy.screenshot('screenshot')
    /* ==== End Cypress Studio ==== */
  })
})