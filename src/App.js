import React, { Component } from 'react';
import Layout from './Components/Layout/Layout';
import WaffleMaker from './Containers/WaffleMaker/WaffleMaker';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <h1>Order yourself a waffle!</h1>
          <WaffleMaker/>
        </Layout>
      </div>
    );
  }
}

export default App;
