import React from 'react';
import App from './App';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('App', () => {
  it('should allow a user to add a song', () => {
    const mockAddSong = jest.fn();

    render( <App addSong={mockAddSong} /> )

    const submitButton = screen.getByRole('button', { name: 'Add To Playlist'});

    fireEvent.click(submitButton);

    expect(mockAddSong).toHaveBeenCalledTimes(1);

  })
});
