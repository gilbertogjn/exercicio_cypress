/// <reference types="cypress" />

describe('Testes para a home Agenda de Contatos', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve renderizar a inclusão de um contato', () => {
        cy.get('input[placeholder="Nome"').type('Gilberto Garcia')
        cy.get('input[placeholder="E-mail"').type('gilbertogjn@gmail.com')
        cy.get('input[placeholder="Telefone"').type('(69) 99950-4002')
        cy.get('.adicionar').click()
    })

    it('Deve renderizar a remoção de um contato', () => {
        cy.get('.delete').first()
    })

    it('Deve renderizar a alteração de um contato', () => {
        cy.get('.edit').first().click()
        cy.get('input[placeholder="Nome"').clear().type('Fulano de Tal')
        cy.get('input[placeholder="E-mail"').clear().type('fulano@gmail.com')
        cy.get('input[placeholder="Telefone"').clear().type('(12) 123456789')
        cy.get('.alterar').first().click()
    })
})