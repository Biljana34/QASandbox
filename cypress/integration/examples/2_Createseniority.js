
it('Log in to QA Sandbox', () => {
  cy.visit('https://qa-sandbox.apps.htec.rs/')

  cy.get('.btn-secondary').click()

  cy.get(':nth-child(1) > .value').type('simic.blj@gmail.com')

  cy.get(':nth-child(2) > .value').type('test123')

  cy.get('[data-testid=submit_btn]').click()

 cy.get('[data-testid=playground_card_id] > :nth-child(1) > a > .card > span > .card-img-top').click()
})
it('Create technologies', () => {


     cy.get('#test3').click()

     cy.contains('CREATE SENIORITY').click() 

     cy.get('input[name="seniority_title"]').type('Junior')

     cy.get('form > .btn').click()

     cy.contains('CREATE SENIORITY').click() 

     cy.get('input[name="seniority_title"]').type('Intermediate')
     
     cy.get('form > .btn').click()

     cy.contains('CREATE SENIORITY').click() 

     cy.get('input[name="seniority_title"]').type('Senior')
     
     cy.get('form > .btn').click()

     cy.contains('CREATE SENIORITY').click() 

     cy.get('input[name="seniority_title"]').type('Lead')
     
    cy.get('form > .btn').click()

     cy.contains('CREATE SENIORITY').click() 

     cy.get('input[name="seniority_title"]').type('Other')
     
     cy.get('form > .btn').click()



	})