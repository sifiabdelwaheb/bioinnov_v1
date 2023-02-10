import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

/* -------------------- Types and Actions Creators ----------------*/

const { Types, Creators } = createActions({
  SearchNameRequest: ["data"],
  SearchNameSuccess: ["response"],
  SearchNameFailure: ["error"]
});

export const SearchNameTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable({
  fetching: null,
  response: {},
  error: null,
  loaded: null,
  data: {}
});
const SearchNameRequest = (state, { data }) =>
  state.merge({
    fetching: true,
    error: null,
    loaded: null
  });

const SearchNameSuccess = (state, { response }) =>
  state.merge({
    fetching: true,
    error: false,
    loaded: true,
    response
  });

const SearchNameFailure = (state, { error }) =>
  state.merge({
    fetching: false,
    error: true,
    loaded: false
  });

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SEARCH_NAME_REQUEST]: SearchNameRequest,
  [Types.SEARCH_NAME_SUCCESS]: SearchNameSuccess,
  [Types.SEARCH_NAME_FAILURE]: SearchNameFailure
});
