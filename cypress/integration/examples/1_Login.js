it('Log in to QA Sandbox', () => {
  cy.visit('https://qa-sandbox.apps.htec.rs/')

  cy.get('.btn-secondary').click()

  cy.get(':nth-child(1) > .value').type('simic.blj@gmail.com')

  cy.get(':nth-child(2) > .value').type('test123')

  cy.get('[data-testid=submit_btn]').click()
})
it('Create technologies', () => {

  cy.get('[data-testid=playground_card_id] > :nth-child(1) > a > .card > span > .card-img-top').click()

  cy.get('#test4').click()

  cy.contains('CREATE TECHNOLOGY').click() 

  cy.get('input[name="technology_title"]').type('PHP')

  cy.contains('Submit').click()

  cy.contains('CREATE TECHNOLOGY').click()

  cy.get('input[name="technology_title"]').type('HTML/CSS')

  cy.contains('Submit').click()

  cy.contains('CREATE TECHNOLOGY').click()

  cy.get('input[name="technology_title"]').type('Python')

  cy.contains('Submit').click()

  cy.contains('CREATE TECHNOLOGY').click()

  cy.get('input[name="technology_title"]').type('JavaScript')

  cy.contains('Submit').click()

  cy.contains('CREATE TECHNOLOGY').click()

  cy.get('input[name="technology_title"]').type('C#')

  cy.contains('Submit').click()

  cy.get('.fa').click()


})


