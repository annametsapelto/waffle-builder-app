import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
  state = {
      showSidedrawer: false
    }

  sideDrawerClosedHandler = () => {
      this.setState({showSidedrawer: false})
  }

  openSideDrawerHandler = () => {
    this.setState({showSidedrawer: true})
  }

  render() {
    return ( 
      <Aux>
        <Toolbar openSide={this.openSideDrawerHandler}/>
        <SideDrawer open={this.state.showSidedrawer} closed={this.sideDrawerClosedHandler}/>
        <main className="Content">
          {this.props.children}
        </main>
      </Aux>
    )
  }
}


export default Layout;