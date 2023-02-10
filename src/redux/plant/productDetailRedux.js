import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

/* -------------------- Types and Actions Creators ----------------*/

const { Types, Creators } = createActions({
  ProductRequest: ["data"],
  ProductSuccess: ["response"],
  ProductFailure: ["error"],
});

export const ProductTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable({
  fetching: null,
  response: {},
  error: null,
  loaded: null,
});
const ProductRequest = (state, { data }) =>
  state.merge({
    fetching: true,
    error: null,
    loaded: null,
  });

const ProductSuccess = (state, { response }) =>
  state.merge({
    fetching: false,
    error: false,
    loaded: true,
    response,
  });

const ProductFailure = (state, { error }) =>
  state.merge({
    fetching: false,
    error: true,
    loaded: false,
    response: error.response,
  });

export const reducer = createReducer(INITIAL_STATE, {
  [Types.PRODUCT_REQUEST]: ProductRequest,
  [Types.PRODUCT_SUCCESS]: ProductSuccess,
  [Types.PRODUCT_FAILURE]: ProductFailure,
});
