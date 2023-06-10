import React, {Component} from 'react';
import RecipeList from './RecipeList';
import Recipe from './Recipe';

export default class Recipes extends Component {
  constructor(props) {
    super(props);
    this.state = {current: null};
  }

  // ** DEBUG
  render() {
    return (
      <>
        <RecipeList />
        <Recipe />
      </>
    );
  }
}
