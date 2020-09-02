import React, { Component } from 'react';
import './Form.css'

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songName: '',
      artistName: '',
      link: '',
      id: Date.now()
    }
  }

  render() {
    return (
      <form className='form'>
        <h2>Add a song here:</h2>
        <input
          name='songTitle'
          placeholder='Song Title'
        />
        <input
          name='artistName'
          placeholder='ArtistName'
        />
        <input
          name='link'
          placeholder='https://www.youtube.com/watch?v=link'
        />
        <button>Add To Playlist</button>
      </form>
    )
  }
}

export default Form;
