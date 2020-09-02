import React from 'react';
import SongCard from './SongCard';
import { render, screen } from '@testing-library/react';

describe('SongCard', () => {
  it('should display the correct content when rendered', () => {
    const song = {
      songName: 'Idle Momements',
      artistName: 'Grant Green',
      link: 'https://www.youtube.com/watch?v=aq0m0hbCjFQ',
      id: 1
    }
    render( <SongCard {...song} /> )

    const songName = screen.getByText('Idle Momements');
    const artistName = screen.getByText('Grant Green');
    const link = screen.getByText('https://www.youtube.com/watch?v=aq0m0hbCjFQ');

    expect(songName).toBeInTheDocument();
    expect(artistName).toBeInTheDocument();
    expect(link).toBeInTheDocument();    
  })
});
