import React, {Component} from 'react';
import AddEditForm from './AddEditForm';
import {connect} from 'react-redux';
import * as Actions from './redux/actions';

class Add extends Component {
  onCancelClick() {
  	this.props.changeScreen('Recipe');
  }

  async onSaveClick(recipe) {
	await this.props.addRecipeRequest(recipe);
	this.props.changeScreen('Recipe');
  }

  render() {
    return (
      <div className="flex-grow-1 flex-column ms-4">
        <h1>Add Recipe</h1>
        <AddEditForm onCancelClick={() => this.onCancelClick()} onSaveClick={x => this.onSaveClick(x)} />
      </div>
    );
  }
}

const mapDispatchToProps = {
  changeScreen: Actions.changeScreen,
  addRecipeRequest: Actions.addRecipeRequest
};

export default connect(null, mapDispatchToProps)(Add);
