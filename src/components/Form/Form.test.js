import React from 'react';
import Form from './Form';
import { render, screen, fireEvent } from '@testing-library/react';

describe('Form', () => {
  it('should display the correct content when rendered', () => {
    render( <Form /> )

    const formHeader = screen.getByRole('heading', { name: 'Add a song here!' })

    expect(formHeader).toBeInTheDocument();
  });

});
