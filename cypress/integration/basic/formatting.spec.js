/// <reference types="cypress" />

import {
  BACKEND_TEXT_SAMPLE,
  BACKEND_TEXT_INDENTED,
  HTML_TEXT
} from "../../../tests/unit/constants"

describe('Simples test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080')
  })

  it('Write input backend code', () => {
    cy.get('textarea').eq(0).type(BACKEND_TEXT_SAMPLE, { delay: 0 })

    cy.get('textarea').eq(1).should('be.visible').should('have.value', HTML_TEXT)
    cy.get('textarea').eq(2).should('be.visible').should('have.value', BACKEND_TEXT_INDENTED)
  })

  it('Write input HTML code', () => {
    cy.get('textarea').eq(1).type(HTML_TEXT, { delay: 0 })

    cy.get('textarea').eq(2).should('be.visible').should('have.value', BACKEND_TEXT_INDENTED)
  })

  it('HTML viewer', () => {
    cy.get('textarea').eq(1).type(HTML_TEXT, { delay: 0 })

    cy.get('section').contains('Nova notificação: Você é incrivel').should('be.visible')
    cy.get('section').contains('Sendo quem você se tornou').should('be.visible')
    cy.get('section').contains('De não acreditar em você mesmo').should('be.visible')
  })
})
