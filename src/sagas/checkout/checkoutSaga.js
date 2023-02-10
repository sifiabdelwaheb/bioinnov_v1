import { takeLatest, put, call } from 'redux-saga/effects';
import { BaseURL } from '../../utils/baseURL';
import axiosRequest, { setAuthorizationBearer } from '../../utils/requests';

import CheckoutActions, { CheckoutTypes } from '../../redux/checkout/checkout';

function* CheckoutRequest({ data }) {
  try {
    let response = yield call(axiosRequest, 'post', BaseURL, '/checkout', data);
    console.log('response data', response.data);
    yield put(CheckoutActions.CheckoutSuccess(response.data));
  } catch (e) {
    yield put(CheckoutActions.CheckoutFailure(e));
  }
}
export default function* Checkout() {
  yield takeLatest(CheckoutTypes.CHECKOUT_REQUEST, CheckoutRequest);
}