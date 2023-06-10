import axios from 'axios';
import * as ActionTypes from './actionTypes';

export const getRecipesRequest = () => async dispatch => {
  const response = await axios.get('/api/recipes');
  dispatch(getRecipesResponse(response.data));
};

export const getRecipesResponse = recipes => {
  return {type: ActionTypes.GET_RECIPES_RESPONSE, payload: {recipes}};
};

export const changeRecipe = recipe => {
  return {type: ActionTypes.CHANGE_RECIPE, payload: {recipe}};
};

export const changeScreen = screen => {
  return {type: ActionTypes.CHANGE_SCREEN, payload: {screen}};
};

export const addRecipeRequest = recipe => async dispatch => {
  const response = await axios({
    url: '/api/recipes/',
	method: 'POST',
	headers: {'Content-Type': 'application/json'},
	data: recipe
  });
  dispatch(addRecipeResponse(response.data));
};

export const addRecipeResponse = recipe => {
  return {type: ActionTypes.ADD_RECIPE_RESPONSE, payload: {recipe}};
};

export const openDeleteModal = () => {
  return {type: ActionTypes.SHOW_DELETE_MODAL};
};

export const cancelDeleteModal = () => {
  return {type: ActionTypes.CANCEL_DELETE_MODAL};
};

export const deleteRecipeRequest = recipe => async dispatch => {
  await axios.delete(`/api/recipes/${recipe.id}`);
  dispatch(deleteRecipeResponse(recipe));
};

export const deleteRecipeResponse = recipe => {
  return {type: ActionTypes.DELETE_RECIPE_RESPONSE, payload: {recipe}};
};

export const editRecipeRequest = recipe => async dispatch => {
  await axios({
    url: `/api/recipes/${recipe.id}`,
	method: 'PATCH',
	headers: {'Content-Type': 'application/json'},
	data: recipe
  });
  dispatch(editRecipeResponse(recipe));
};

export const editRecipeResponse = recipe => {
  return {type: ActionTypes.EDIT_RECIPE_RESPONSE, payload: {recipe}};	
};
