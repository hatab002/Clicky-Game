import React, { Component } from 'react';
import Image from "./components/Image";
import Score from "./components/Score";
import API from "./utils/API";
import './App.css';

class App extends Component {

  state = {
    score: 0,
    topScore: 0,
    gifs: []
  }

  componentDidMount(){
    this.grabGifs("?q=lion+king&limit=10")
  }

  grabGifs = query => {
    API.search(query)
      .then(response =>{
        const gifInfo = response.data;
        const gifs = gifInfo.map(function(){
          return {
            id: gifInfo.indexOf(this),
            src: gifInfo.images.fixed_height_small.url,
            clicked: false
          }
        }).get();
        this.setState({gifs})
      })
      .catch( err => console.log(err))
  }

  shuffle = () => {
    const gifs = this.state.gifs;
    for (let i = gifs.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const tempGifs = gifs[i];
      gifs[i] = gifs[j];
      gifs[j] = tempGifs;
    }
    return gifs;
  }
  render() {
    return (
      <div className="App">
        
      </div>
    );
  }
}

export default App;
