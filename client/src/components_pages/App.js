import React, { Component } from 'react';
import {Link} from "react-router";
import Navbar from "../components_utils/Navbar";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Navbar />
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.        <a href="/review_mobile.html"></a>
          <Link to="/restaurant/Considine">app2</Link>

        </p>

      </div>
    );
  }
}



export default App;
