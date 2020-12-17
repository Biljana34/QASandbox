// it('Log in to QA Sandbox', () => {
//   cy.visit('https://qa-sandbox.apps.htec.rs/')

//   cy.get('.btn-secondary').click()

//   cy.get(':nth-child(1) > .value').type('simic.blj@gmail.com')

//   cy.get(':nth-child(2) > .value').type('test123')

//   cy.get('[data-testid=submit_btn]').click()

//   cy.get('[data-testid=playground_card_id] > :nth-child(1) > a > .card > span > .card-img-top').click()
// })

it('Create team', () => {


     cy.get('#test1').click()

     cy.contains('CREATE TEAM').click() 

     cy.get('.value').type('BE')

     cy.contains('Submit').click()

     cy.contains('CREATE TEAM').click() 

     cy.get('.value').type('FE')

     cy.contains('Submit').click()

     cy.contains('CREATE TEAM').click() 

     cy.get('.value').type('QA')

     cy.contains('Submit').click()



     

	})