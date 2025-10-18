class LoginPage {
  acessarLogin() {
    cy.visit('https://front.serverest.dev/login')
  }

  preencherEmail(email) {
    cy.get('[data-testid="email"]').clear().type(email)
  }

  preencherSenha(senha) {
    cy.get('[data-testid="senha"]').clear().type(senha)
  }

  clicarEntrar() {
    cy.get('[data-testid="entrar"]').click()
  }

  login(email, senha) {
    this.acessarLogin()
    this.preencherEmail(email)
    this.preencherSenha(senha)
    this.clicarEntrar()
  }
}

export default LoginPage
