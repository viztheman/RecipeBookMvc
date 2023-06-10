import React, {Component} from 'react';
import {connect} from 'react-redux';

class Recipe extends Component {
  render() {
    let content;

    const {current} = this.props;

    if (!current) {
      content = <h2>No recipes here. Try adding one!</h2>;
    }
    else {
      const pIngredients = current.ingredients.split('\n').map((x, i) => <p key={i}>{x}</p>);
      const pSteps = current.steps.split('\n').map((x, i) => <p key={i}>{x}</p>);
      const pNotes = current.notes.split('\n').map((x, i) => <p key={i}>{x}</p>);

      content = (
        <>
          <h2 className="mb-4">{current.title}</h2>
          <div className="flex-grow-1 d-flex flex-row">
            <div className="w-33 d-flex flex-column pe-2">
              <h5>Ingredients</h5>
              <div className="scrollable">{pIngredients}</div>
            </div>
            <div className="w-33 d-flex flex-column pe-2">
              <h5>Steps</h5>
              <div className="scrollable">{pSteps}</div>
            </div>
            <div className="flex-grow-1 d-flex flex-column">
              <h5>Notes</h5>
              <div className="scrollable">{pNotes}</div>
            </div>
          </div>
        </>
      );
    }

    return (
      <main className="flex-grow-1 flex-column ps-4">
        {content}
      </main>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  current: state.current
});

export default connect(mapStateToProps)(Recipe);
