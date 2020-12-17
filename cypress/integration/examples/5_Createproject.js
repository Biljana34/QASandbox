it('Log in to QA Sandbox', () => {
  cy.visit('https://qa-sandbox.apps.htec.rs/')

  cy.get('.btn-secondary').click()

  cy.get(':nth-child(1) > .value').type('simic.blj@gmail.com')

  cy.get(':nth-child(2) > .value').type('test123')

  cy.get('[data-testid=submit_btn]').click()

  cy.get('[data-testid=playground_card_id] > :nth-child(1) > a > .card > span > .card-img-top').click()
})
// it('Create project', () => {


//   cy.contains('CREATE PROJECT').click() 

//   cy.get('.value').type('Team 1')

//   cy.get('input[placeholder="Select people"]').click()

//   cy.get('[aria-label="Mara Maric"]').click()

//   cy.get('[aria-label="Pero Peric"]').click()

//   cy.get('[aria-label="Jela Jelic"]').click()

//   cy.get('[aria-label="Milos  Milic"]').click()

//   cy.get('[aria-label="Maja  Milic"]').click()

//   cy.contains('Submit').click()

//   cy.get('[data-testid=playground_card_id] > :nth-child(1) > a > .card > span > .card-img-top').click()

// })

it('Edit project', () => {

  cy.get('.list-group-item').click()

  cy.get('.float-right').click()



})