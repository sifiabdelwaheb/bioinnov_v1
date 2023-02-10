import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

/* -------------------- Types and Actions Creators ----------------*/

const { Types, Creators } = createActions({
  CheckoutRequest: ["data"],
  CheckoutSuccess: ["response"],
  CheckoutFailure: ["error"]
});

export const CheckoutTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable({
  fetching: null,
  response: {},
  error: null,
  loaded: null,
  data: {}
});
const CheckoutRequest = (state, { data }) =>
  state.merge({
    fetching: true,
    error: null,
    loaded: null
  });

const CheckoutSuccess = (state, { response }) =>
  state.merge({
    fetching: true,
    error: false,
    loaded: true,
    response
  });

const CheckoutFailure = (state, { error }) =>
  state.merge({
    fetching: false,
    error: true,
    loaded: false
  });

export const reducer = createReducer(INITIAL_STATE, {
  [Types.CHECKOUT_REQUEST]: CheckoutRequest,
  [Types.CHECKOUT_SUCCESS]: CheckoutSuccess,
  [Types.CHECKOUT_FAILURE]: CheckoutFailure
});
