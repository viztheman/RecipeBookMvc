import React, {Component} from 'react';
import {Navbar, NavbarBrand, Button} from 'reactstrap';
import * as Actions from './redux/actions';
import {connect} from 'react-redux';

class Header extends Component {
  onAddClick() {
  	this.props.changeScreen('Add');
  }

  onEditClick() {
    this.props.changeScreen('Edit');
  }

  onDeleteClick() {
    this.props.openDeleteModal();
  }

  render() {
	const {screen, current} = this.props;

	const showDelete = (screen === 'Recipe' && current);
	const showEdit = (screen === 'Recipe' && current);
	const showAdd = (screen === 'Recipe');

    return (
      <Navbar>
        <NavbarBrand className="flex-grow-1">&#x1F4D3; Recipe Book</NavbarBrand>
       	{showDelete && <Button color="danger" size="sm" className="me-2" onClick={() => this.onDeleteClick()}>Delete</Button>}
        {showEdit && <Button color="secondary" size="sm" className="me-2" onClick={() => this.onEditClick()}>Edit</Button>}
        {showAdd && <Button color="success" size="sm" onClick={() => this.onAddClick()}>Add</Button>}
      </Navbar>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  screen: state.screen,
  current: state.current
});

const mapDispatchToProps = {
  changeScreen: Actions.changeScreen,
  openDeleteModal: Actions.openDeleteModal
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
