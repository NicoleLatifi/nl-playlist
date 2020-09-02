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

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <form className='form'>
        <h2>Add a song here!</h2>
        <input
          name='songTitle'
          placeholder='Song Title'
          value={this.state.songTitle}
          onChange={this.handleChange}
        />
        <input
          name='artistName'
          placeholder='ArtistName'
          value={this.state.artistName}
          onChange={this.handleChange}
        />
        <input
          name='link'
          placeholder='https://www.youtube.com/watch?v=link'
          value={this.state.link}
          onChange={this.handleChange}
        />
        <button>Add To Playlist</button>
      </form>
    )
  }
}

export default Form;
