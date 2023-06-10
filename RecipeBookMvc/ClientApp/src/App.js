import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Screen from './Screen';
import './App.css';
import {connect} from 'react-redux';
import * as Actions from './redux/actions';

class App extends Component {
  componentDidMount() {
    this.props.getRecipesRequest();
  }

  render() {
    return <Screen />;
  }
}

const mapDispatchToProps = {
  getRecipesRequest: Actions.getRecipesRequest
};

export default connect(null, mapDispatchToProps)(App);
