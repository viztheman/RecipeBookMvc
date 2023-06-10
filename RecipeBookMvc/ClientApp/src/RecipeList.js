import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from 'reactstrap';
import Search from './Search';
import * as Actions from './redux/actions';
import {connect} from 'react-redux';

class Recipe extends Component {
  render() {
    const {active, recipe, onClick} = this.props;

    return (
      <ListGroupItem action active={active} href="#" tag="a" onClick={() => onClick(recipe)}>
        {recipe.title}
      </ListGroupItem>
    );
  }
}

class RecipeList extends Component {
  onClick(recipe) {
    this.props.changeRecipe(recipe);
  }

  render() {
    const {recipes, current} = this.props;

    const listGroupItems = recipes.map((x, i) =>
      <Recipe key={i} active={current.id === x.id} recipe={x} onClick={x => this.onClick(x)} />
    );

    return (
      <aside className="w-20 d-flex flex-column">
        <Search />
        <div className="flex-grow-1 scrollable">
          <ListGroup>
            {listGroupItems}
          </ListGroup>
        </div>
      </aside>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  recipes: state.recipes,
  current: state.current
});

const mapDispatchToProps = {
  changeRecipe: Actions.changeRecipe
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeList);
