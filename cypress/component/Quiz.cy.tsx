import React from 'react';
import Quiz from '../../client/src/components/Quiz';

describe('<Quiz />', () => {
  it('shoud render the quiz component', () => {
    cy.mount(<Quiz />);
  });

  it('should render the header component with the proper content', () => {
    cy.mount(<Quiz />);
    cy.get('button').should('have.text', 'Start Quiz');
  });
});
