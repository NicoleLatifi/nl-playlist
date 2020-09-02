import React from 'react';
import Form from './Form';
import { render, screen } from '@testing-library/react';

describe('Form', () => {
  it('should display the correct content when rendered', () => {
    render( <Form /> )

    const formHeader = screen.getByRole('heading', { name: 'Add a song here!' });
    const songNameInput = screen.getByTestId('songTitle');
    const artistNameInput = screen.getByTestId('artistName');
    const linkInput = screen.getByTestId('link');
    const submitButton = screen.getByRole('button', { name: 'Add To Playlist'})

    expect(formHeader).toBeInTheDocument();
    expect(songNameInput).toBeInTheDocument();
    expect(artistNameInput).toBeInTheDocument();
    expect(linkInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it('should take inputs', () => {
    render( <Form /> )



  });

});
