import React, { Component } from 'react';
import Form from '../Form/Form'
import SongController from '../SongController/SongController';
import { getAllSongs } from '../apiCalls'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      songQueue: []
    }
  }

  componentDidMount = () => {
    getAllSongs()
      .then(data =>{
        this.setState({ songQueue: data })
      })
      .catch(error => console.error(error));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Turing Playlist</h1>
        </header>
        <div className="App-background">
          <main>
            <Form />
            <SongController songQueue={this.state.songQueue}/>
          </main>
        </div>
      </div>
    )
  }
}

export default App;
