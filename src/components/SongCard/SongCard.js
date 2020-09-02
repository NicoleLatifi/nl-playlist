import React from 'react';
import './SongCard.css'

const SongCard = ({ songName, artistName, link, id }) => {
  return (
    <div className='card-container'>
      <p>{songName}</p>
      <p>{artistName}</p>
      <p>{link}</p>
    </div>
  )
}

export default SongCard;
