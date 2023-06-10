import * as ActionTypes from './actionTypes';

const initialState = {
  recipes: [],
  current: null,
  screen: 'Recipe',
  showDeleteModal: false
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.GET_RECIPES_RESPONSE:
      return {...state,
        recipes: [...action.payload.recipes],
        current: action.payload.recipes.length > 0 ? action.payload.recipes[0] : null
      };

    case ActionTypes.CHANGE_RECIPE:
      return {...state,
	    current: state.recipes.find(x => x.id === action.payload.recipe.id)
	  };

    case ActionTypes.CHANGE_SCREEN:
      return {...state,
        screen: action.payload.screen
      };
  
    case ActionTypes.ADD_RECIPE_RESPONSE:
	  const recipes = [action.payload.recipe, ...state.recipes];

      return {...state,
	    recipes,
		current: recipes.find(x => x.id === action.payload.recipe.id)
	  };

	case ActionTypes.SHOW_DELETE_MODAL:
	  return {...state, showDeleteModal: true};

    case ActionTypes.CANCEL_DELETE_MODAL:
	  return {...state, showDeleteModal: false};

	case ActionTypes.DELETE_RECIPE_RESPONSE:
	  const filteredRecipes = state.recipes.filter(x => x.id !== action.payload.recipe.id)

	  return {...state,
	    recipes: filteredRecipes,
		current: filteredRecipes.length > 0 ? filteredRecipes[0] : null
	  };

    case ActionTypes.EDIT_RECIPE_RESPONSE:
	  const index = state.recipes.findIndex(x => x.id === action.payload.recipe.id);
	  const editedRecipes = [...state.recipes];
	  editedRecipes.splice(index, 1, action.payload.recipe);

	  return {...state, recipes: editedRecipes};

    default:
      return state;
  }
}
