import React, { Component } from 'react';
import { AppWrapper, Content } from './components'
import Navigation from './Navigation'
import Routes from './Routes'

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <Navigation />
        <Content>
          <Routes />
        </Content>
      </AppWrapper>
    );
  }
}

export default App;
