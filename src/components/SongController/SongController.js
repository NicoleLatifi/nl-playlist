import React from 'react';
import SongCard from '../SongCard/SongCard'

const SongController = ( { songQueue, changeSong } ) => {
  const songCards = songQueue.map( song => {
    return <SongCard {...song} key={song.id} />
  })

  return (
    <div>
      {songCards}
      <button>Next Song</button>
    </div>
  );
};

export default SongController;
