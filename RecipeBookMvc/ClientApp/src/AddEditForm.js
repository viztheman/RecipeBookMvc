import React, {Component} from 'react';
import {FormGroup, Label, Input, Button} from 'reactstrap';

export default class AddEditForm extends Component {
  constructor(props) {
    super(props);
	this.state = {
	  title: '',
	  ingredients: '',
	  steps: '',
	  notes: ''
	};
  }

  onTitleChanged(e) {
  	this.setState({title: e.target.value});
  }

  onIngredientsChanged(e) {
  	this.setState({ingredients: e.target.value});
  }

  onStepsChanged(e) {
    this.setState({steps: e.target.value});
  }

  onNotesChanged(e) {
    this.setState({notes: e.target.value});
  }

  onSaveClick() {
	const {title, ingredients, steps, notes} = this.state;
	const recipe = {title, ingredients, steps, notes};
	if (this.state.id) recipe.id = this.state.id;
	
	this.props.onSaveClick(recipe);
  }

  componentDidMount() {
	const {current} = this.props;
    if (!current) return;

    this.setState({
	  id: current.id,
	  title: current.title,
	  ingredients: current.ingredients,
	  steps: current.steps,
	  notes: current.notes
	});
  }

  render() {
    const {title, ingredients, steps, notes} = this.state;
	const {onCancelClick} = this.props;

    return (
      <>
        <FormGroup className="w-50 mt-4">
          <Label>Title</Label>
          <Input value={title} onChange={e => this.onTitleChanged(e)} />
        </FormGroup>
        <FormGroup className="w-50 mt-2">
          <Label>Ingredients</Label>
          <Input type="textarea" rows="4" value={ingredients} onChange={e => this.onIngredientsChanged(e)} />
        </FormGroup>
        <FormGroup className="w-50 mt-2">
          <Label>Steps</Label>
          <Input type="textarea" rows="4" value={steps} onChange={e => this.onStepsChanged(e)} />
        </FormGroup>
        <FormGroup className="w-50 mt-2">
          <Label>Notes</Label>
          <Input type="textarea" rows="4" value={notes} onChange={e => this.onNotesChanged(e)} />
        </FormGroup>
        <div className="mt-3">
          <Button color="secondary" onClick={onCancelClick}>Cancel</Button>
          <Button color="primary" className="ms-2" onClick={() => this.onSaveClick()}>Save</Button>
        </div>
      </>
    );
  }
}
