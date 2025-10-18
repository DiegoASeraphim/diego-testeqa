import LoginPage from '../../support/pageObjects/LoginPage'

describe('Serverest Store - Frontend E2E', () => {
  const loginPage = new LoginPage()

  beforeEach(() => {
    cy.visit('https://front.serverest.dev/login')
  })

  it('Deve realizar login com sucesso e exibir produtos', () => {
    loginPage.preencherEmail('testediego@teste.com')
    loginPage.preencherSenha('teste123')
    loginPage.clicarEntrar()

    cy.url().should('include', '/home')
    cy.contains('Serverest Store').should('be.visible')
    cy.contains('Adicionar a lista').should('exist')
  })

  it('Deve exibir mensagem de erro ao tentar login inválido', () => {
    loginPage.preencherEmail('fulano@qa.com')
    loginPage.preencherSenha('teste')
    loginPage.clicarEntrar()

    cy.contains('Email e/ou senha inválidos').should('be.visible')
    cy.url().should('include', '/login')
  })

  it('Deve exibir lista de produtos após login', () => {
    loginPage.login('testediego@teste.com', 'teste123')
    cy.contains('Serverest Store').should('be.visible')
    cy.get('.card').should('have.length.greaterThan', 0)
  })
