import React, { Component } from 'react';

import Coinlists from '../components/coinlist/coinlists';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Coinlists />
        <Footer />
      </div>
    );
  }
}

export default App;
