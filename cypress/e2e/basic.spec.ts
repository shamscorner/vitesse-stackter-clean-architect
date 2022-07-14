context('Basic', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('basic nav', () => {
    cy.url()
      .should('eq', 'http://localhost:3333/')

    cy.contains('Opinionated Vite Starter Template. Customized to support modular architecture pattern.')
      .should('exist')

    cy.get('.btn')
      .click()
      .url()
      .should('eq', 'http://localhost:3333/users/home')
  })

  it('users/home page', () => {
    cy.visit('http://localhost:3333/users/home')

    cy.get('[data-test="btn-choose-plan"]')
      .should('be.disabled')

    cy.get('#inputName')
      .type('John Doe')

    cy.get('#inputEmail')
      .type('john@example.com')

    cy.get('[data-test="btn-choose-plan"]')
      .should('not.be.disabled')

    cy.get('[data-test="btn-choose-plan"]')
      .click()
      .url()
      .should('eq', 'http://localhost:3333/orders/John%20Doe')
  })

  it('markdown', () => {
    cy.get('[title="About"]')
      .click()
      .url()
      .should('eq', 'http://localhost:3333/about')

    cy.get('pre.language-js')
      .should('exist')
  })
})
