describe('Testes na Tela de Login', () => {
 
    beforeEach(() => {
        cy.visit('/login')
    });
    
it.only('Teste 01 - Login Válido', () => {

  cy.login(Cypress.env('usuarioEmail'),Cypress.env('senhaUsuario'))

  cy.get('b').should('have.text',Cypress.env('usuarioNome'))

});

it('Teste 02 - Login com senha inválida', () => {

  cy.login(Cypress.env('usuarioEmail'),'gfsad')

  cy.get('.login-form > form > p').should('have.text','Your email or password is incorrect!')

});

it(' Teste 03 - Login com E-mail inválido', () => {
  
  cy.login('vmss@sss07.com',Cypress.env('senhaUsuario'))

  cy.get('.login-form > form > p').should('have.text','Your email or password is incorrect!')
        
});


});