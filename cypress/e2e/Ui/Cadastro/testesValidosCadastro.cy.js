const elementos = require('../../../support/Elements/globalElements').ELEMENTS
const massaDeDados = require('faker-br')

describe('Testes válidos na tela de cadastro',()=>{
   
beforeEach(() => {
  
  cy.visit('/login')

});

it('Cadastro realizado com sucesso', () => {

var nomeUsuario = massaDeDados.name.firstName();

 cy.get(elementos.nomeCadastro).type(nomeUsuario)
 cy.get(elementos.emailCadastro).type(massaDeDados.internet.email())
 cy.get(elementos.botaoCadastro).click()

 cy.get(elementos.tituloCadastro).click()
 cy.get(elementos.senhaCadastro).type(Cypress.env('senhaUsuario'))
 cy.get(elementos.diaNascimentoCadastro).select('15')
 cy.get(elementos.mesNascimentoCadastro).select('November')
 cy.get(elementos.anoNascimentoCadastro).select('1993')
 cy.get(elementos.newsCadastro).click()
 cy.get(elementos.ofertasCadastro).click()   
 cy.get(elementos.primeiroNomeCadastro).type(nomeUsuario)
 cy.get(elementos.ultimoNomeCadastro).type(Cypress.env('usuarioNome'))
 cy.get(elementos.ciaCadastro).type('Novo Estilo')
 cy.get(elementos.endereçoCadastro).type('Rua das Naçoes,10')
 cy.get(elementos.paisCadastro).type('India')
 cy.get(elementos.estadoCadastro).type('Assam')
 cy.get(elementos.cidadeCadastro).type('Nova Deli')
 cy.get(elementos.cepCadastro).type('608888888')
 cy.get(elementos.telefoneCadastro).type('(77) 9 99999999')

 cy.get(elementos.botaoCriarContaCadastro).click()
 cy.get(elementos.botaoContinuarCadastro).click()
 cy.get(elementos.usuarioLogado).should('have.text', nomeUsuario)


});

});