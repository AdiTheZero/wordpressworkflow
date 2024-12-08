describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost')
    cy.wait(2000)

    /* ==== Generated with Cypress Studio ==== */
    cy.get('#language-continue').click();
    cy.get('#weblog_title').clear('google');
    cy.get('#weblog_title').type('google');
    cy.get('#user_login').clear('adityaspn');
    cy.get('#user_login').type('adityaspn');
    cy.get('.user-pass1-wrap').click();
    cy.get('#pass1').clear();
    cy.get('#pass1').type('Adity@1234');
    cy.get('.pw-checkbox').check();
    cy.get('#admin_email').clear('A');
    cy.get('#admin_email').type('Adity@1234');
    cy.get('#blog_public').check();
    cy.get('#submit').click();
    cy.get('.pw-checkbox').check();
    cy.get('#admin_email').click();
    cy.get('tbody > :nth-child(6)').click();
    cy.get('#admin_email').clear();
    cy.get('#admin_email').type('Adityakumarspn555@gmail.com');
    cy.get('#submit').click();
    cy.get('a').click();
    cy.get('#user_login').clear('a');
    cy.get('#user_login').type('adityaspn');
    cy.get('#user_pass').clear('A');
    cy.get('#user_pass').type('Adity@1234');
    cy.get('.dashicons').click();
    cy.get('#wp-submit').click();
    cy.screenshot('homepage-screenshot')
    /* ==== End Cypress Studio ==== */
  })
})