import React, {Component} from 'react';
import Header from './Header';
import './Screen.css';
import Recipes from './Recipes';
import Add from './Add';
import Edit from './Edit';
import DeleteModal from './DeleteModal';
import * as Actions from './redux/actions';
import {connect} from 'react-redux';

class Screen extends Component {
  render() {
    let content;

    const screen = this.props.screen;

    switch (screen) {
      case 'Add':
        content = <Add />;
        break;
      case 'Edit':
        content = <Edit />;
        break;
      default:
        content = <Recipes recipes={this.props.recipes} />;
        break;
    }

    return (
      <div className="screen d-flex flex-column p-2">
        <Header />
        <div className="flex-grow-1 d-flex">
          {content}
        </div>
        <DeleteModal />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  screen: state.screen
});

const mapDispatchToProps = {
  changeScreen: Actions.changeScreen
};

export default connect(mapStateToProps, mapDispatchToProps)(Screen);
