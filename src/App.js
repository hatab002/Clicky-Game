import React, { Component } from 'react';
import Image from "./components/Image";
import Score from "./components/Score";
import gifs from "./gifs.json"
// import API from "./utils/API";
import './App.css';

class App extends Component {

  state = {
    score: 0,
    topScore: 0,
    gifs
  }

  // componentDidMount(){
  //   this.grabGifs("?q=lion+king&limit=10")
  // }

  // grabGifs = query => {
  //   API.search(query)
  //     .then(response =>{
  //       const gifInfo = response.data;
  //       const gifs = gifInfo.map(function(){
  //         return {
  //           id: gifInfo.images.id,
  //           src: gifInfo.images.fixed_height_small.url,
  //           clicked: false
  //         }
  //       }).get();
  //       this.setState({gifs})
  //     })
  //     .catch( err => console.log(err))
  // }

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

  clickCheck = id => {
    const clickedGif = this.state.gifs.filter(gif => gif.id === id);
    return clickedGif[0].clicked ? true: false;
  }

  clickingGif = id => {
    if(this.clickCheck(id)){
      this.setState({
        score:0,
      });
      this.state.gifs.map(gif => {
        gif.clicked = false
      })
    } else{
      const gifs = this.state.gifs.map(gif => {
        if (gif.id === id){
          gif.clicked = true;
        }
        return gif
      });
      this.setState({
        topScore: this.state.score +1 > this.state.topScore ? this.state.score +1 : this.state.topScore,
        score: this.state.score + 1,
        gifs: this.shuffle(gifs)
      })
    }
  }
  render() {
    return (
      <div className="App">
        <Score 
        score={this.state.score}
        topScore={this.state.topScore}
        />
        <div className= "row">
          <div className="imageDiv">
            {this.state.gifs.map((gifs) => (
              <Image 
              key={gifs.id}
              id={gifs.id}
              src={gifs.src}
              clickingGif={this.clickingGif}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
