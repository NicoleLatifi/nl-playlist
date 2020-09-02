import React, { Component } from 'react';
import './App.css';
import SongController from '../SongController/SongController';
import { getAllSongs } from '../apiCalls'

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
        console.log(data);
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
            <SongController songQueue={this.state.songQueue}/>
          </main>
        </div>
      </div>
    )
  }
}

export default App;
