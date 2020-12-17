// it('Log in to QA Sandbox', () => {
//   cy.visit('https://qa-sandbox.apps.htec.rs/')

//   cy.get('.btn-secondary').click()

//   cy.get(':nth-child(1) > .value').type('simic.blj@gmail.com')

//   cy.get(':nth-child(2) > .value').type('test123')

//   cy.get('[data-testid=submit_btn]').click()

//   cy.get('[data-testid=playground_card_id] > :nth-child(1) > a > .card > span > .card-img-top').click()
// })
it('Create people', () => {


     cy.get('#test2').click()

     cy.contains('CREATE PERSON').click() 

     cy.get('input[name="people_name"]').type('Mara Maric')

     cy.get('input[placeholder="Select technologies"]').click()

     cy.get('[aria-label="C#"]').click()

     cy.get(':nth-child(2) > :nth-child(1) > .react-dropdown-select > .react-dropdown-select-dropdown-handle').click()

     cy.get('input[placeholder="Select seniority"]').click()

     cy.get('[aria-label="Junior"]').click()

     cy.get('input[placeholder="Select team"]').click()

     cy.get('span[aria-label="BE"]').click()

     cy.contains('Submit').click()

     cy.contains('CREATE PERSON').click() 

     cy.get('input[name="people_name"]').type('Pero Peric')

     cy.get('input[placeholder="Select technologies"]').click()

     cy.get('[aria-label="JavaScript"]').click()

     cy.get(':nth-child(2) > :nth-child(1) > .react-dropdown-select > .react-dropdown-select-dropdown-handle').click()

     cy.get('input[placeholder="Select seniority"]').click()

     cy.get('[aria-label="Senior"]').click()

     cy.get('input[placeholder="Select team"]').click()

     cy.get('span[aria-label="QA"]').click()

     cy.contains('Submit').click()

     cy.contains('CREATE PERSON').click() 

     cy.get('input[name="people_name"]').type('Jela Jelic')

     cy.get('input[placeholder="Select technologies"]').click()

     cy.get('[aria-label="HTML/CSS"]').click()

     cy.get(':nth-child(2) > :nth-child(1) > .react-dropdown-select > .react-dropdown-select-dropdown-handle').click()

     cy.get('input[placeholder="Select seniority"]').click()

     cy.get('[aria-label="Senior"]').click()

     cy.get('input[placeholder="Select team"]').click()

     cy.get('span[aria-label="FE"]').click()

     cy.contains('Submit').click()

     cy.contains('CREATE PERSON').click() 

     cy.get('input[name="people_name"]').type('Milos  Milic')

     cy.get('input[placeholder="Select technologies"]').click()

     cy.get('[aria-label="Python"]').click()

     cy.get(':nth-child(2) > :nth-child(1) > .react-dropdown-select > .react-dropdown-select-dropdown-handle').click()

     cy.get('input[placeholder="Select seniority"]').click()

     cy.get('[aria-label="Senior"]').click()

     cy.get('input[placeholder="Select team"]').click()

     cy.get('span[aria-label="BE"]').click()

     cy.contains('Submit').click()

     cy.contains('CREATE PERSON').click() 

     cy.get('input[name="people_name"]').type('Maja  Milic')

     cy.get('input[placeholder="Select technologies"]').click()

     cy.get('[aria-label="PHP"]').click()

     cy.get(':nth-child(2) > :nth-child(1) > .react-dropdown-select > .react-dropdown-select-dropdown-handle').click()

     cy.get('input[placeholder="Select seniority"]').click()

     cy.get('[aria-label="Senior"]').click()

     cy.get('input[placeholder="Select team"]').click()

     cy.get('span[aria-label="BE"]').click()

     cy.contains('Submit').click()



	})