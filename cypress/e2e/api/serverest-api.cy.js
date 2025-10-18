describe('Serverest Store - API', () => {
  const baseUrl = 'https://serverest.dev'

  it('Deve realizar login com sucesso com usuário válido', () => {
    cy.request('POST', `${baseUrl}/login`, {
      email: 'testediego@teste.com',
      password: 'teste123'
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.message).to.eq('Login realizado com sucesso')
      expect(response.body).to.have.property('authorization')
    })
  })

  it('Deve retornar erro ao tentar login com usuário inválido', () => {
    cy.request({
      method: 'POST',
      url: `${baseUrl}/login`,
      body: {
        email: 'fulano@qa.com',
        password: 'teste'
      },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(401)
      expect(response.body.message).to.eq('Email e/ou senha inválidos')
    })
  })

  it('Deve retornar lista de produtos com sucesso', () => {
    cy.request('GET', `${baseUrl}/produtos`)
      .then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body.produtos).to.be.an('array')
        expect(response.body.produtos[0]).to.have.keys(['nome', 'preco', 'descricao', '_id'])
      })
  })
