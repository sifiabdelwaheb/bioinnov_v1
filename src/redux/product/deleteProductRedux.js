import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* -------------------- Types and Actions Creators ----------------*/

const { Types, Creators } = createActions({
  deleteProductRequest: ['id'],
  deleteProductSuccess: ['response'],
  deleteProductFailure: ['error'],
});

export const deleteProductTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable({
  fetching: null,
  response: {},
  error: null,
  loaded: null,
});
const deleteProductRequest = (state, { id }) =>
  state.merge({
    fetching: true,
    error: null,
    loaded: null,
  });

const deleteProductSuccess = (state, { response }) =>
  state.merge({
    fetching: false,
    error: false,
    loaded: true,
    response,
  });

const deleteProductFailure = (state, { error }) =>
  state.merge({
    fetching: false,
    error: true,
    loaded: false,
    response: error.response,
  });

export const reducer = createReducer(INITIAL_STATE, {
  [Types.DELETE_PRODUCT_REQUEST]: deleteProductRequest,
  [Types.DELETE_PRODUCT_SUCCESS]: deleteProductSuccess,
  [Types.DELETE_PRODUCT_FAILURE]: deleteProductFailure,
});
