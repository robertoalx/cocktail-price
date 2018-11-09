import React, { Component } from 'react';
import Cocktail from './component/cocktail'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>We can do it!</h1>
        <Cocktail />
      </div>
    );
  }
}

export default App;
