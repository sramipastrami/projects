import React from "react";
import "./App.css";

import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";

import Spotify from "../../util/Spotify";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: [],
      playlistName: "myPlaylist",
      playlistTracks: [],
    };

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  addTrack(track) {
    const objectFound = this.state.playlistTracks.find(
      (savedTrack) => savedTrack.id === track.id
    );

    if (!objectFound) {
      const newList = this.state.playlistTracks.concat([track]);
      this.setState({ playlistTracks: newList });
    }
  }

  removeTrack(unwantedTrack) {
    const filteredList = this.state.playlistTracks.filter(
      (existingTrack) => existingTrack.id !== unwantedTrack.id
    ); //filters out all the tracks that dont have the same id as the unwantedTrack

    this.setState({ playlistTracks: filteredList });
  }

  updatePlaylistName(newName) {
    this.setState({ playlistName: newName });
  }

  savePlaylist() {
    const trackUris = this.state.playlistTracks.map((track) => track.uri);
    Spotify.savePlaylist(this.state.playlistName, trackUris).then(() => {
      this.setState({
        playlistName: "New Playlist",
        playlistTracks: [],
      });
    });
  }
  //
  search(term) {
    Spotify.search(term).then((searchResults) => {
      const existingIds = this.state.playlistTracks.map((track) => track.id); //returns a new arr. with all existing track ids
      const filteredArr = searchResults.filter(
        (result) => !existingIds.includes(result.id)
      );
      this.setState({ searchResults: filteredArr });
    });
  }

  render() {
    return (
      <div>
        <h1>
          Ja<span className="highlight">mmm</span>ing
        </h1>
        <div className="App">
          <SearchBar onSearch={this.search} />
          <div className="App-playlist">
            <SearchResults
              searchResults={this.state.searchResults}
              onAdd={this.addTrack}
            />
            <Playlist
              playlistName={this.state.playlistName}
              playlistTracks={this.state.playlistTracks}
              onRemove={this.removeTrack}
              onNameChange={this.updatePlaylistName}
              onSave={this.savePlaylist}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
