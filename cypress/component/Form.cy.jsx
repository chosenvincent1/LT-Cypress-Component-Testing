import React from 'react';
import Form from '../../src/components/Form/Form';
import '../../src/components/Form/Form.module.scss';

describe('Form component', () => {
  beforeEach(() => {
    cy.mount(<Form />);
  });

  it('renders all required fields', () => {
    cy.get('[data-cy="first-name"]').should('exist');
    cy.get('[data-cy="last-name"]').should('exist');
    cy.get('[data-cy="email"]').should('exist');
    cy.get('[data-cy="designation"]').should('exist');
    cy.get('[data-cy="country"]').should('exist');
    cy.get('[data-cy="phone"]').should('exist');
    cy.get('[data-cy="social"]').should('exist');
    cy.get('[data-cy="samples"]').should('exist');
  });


  it('Fills and submit form', () => {
    cy.get('[data-cy="first-name"]').type('Chosen');
    cy.get('[data-cy="last-name"]').type('Vincent');
    cy.get('[data-cy="email"]').type('chosen@example.com');
    cy.get('[data-cy="designation"]').type('Software Engineer');
    cy.get('[data-cy="country"]').select('nigeria');
    cy.get('[data-cy="phone"]').type('1234567890');
    cy.get('[data-cy="social"]').type('https://www.linkedin.com/in/chosenvincent1/');
    cy.get('[data-cy="samples"]').type('https://www.lambdatest.com/blog/smooth-scroll-in-css/');

    cy.get('[data-cy="submit"]').should('exist').click();
  });
});