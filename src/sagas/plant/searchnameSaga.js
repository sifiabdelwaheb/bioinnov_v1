import { takeLatest, put, call } from 'redux-saga/effects';
import { BaseURL } from '../../utils/baseURL';
import axiosRequest, { setAuthorizationBearer } from '../../utils/requests';

import SearchNameActions, { SearchNameTypes } from '../../redux/plant/namesearchRedux';

function* SearchNameRequest({ data }) {
  try {
    let response = yield call(axiosRequest, 'post', BaseURL, '/searchname', data);
    console.log('response data', response.data);
    yield put(SearchNameActions.SearchNameSuccess(response.data));
  } catch (e) {
    yield put(SearchNameActions.SearchNameFailure(e));
  }
}
export default function* SearchName() {
  yield takeLatest(SearchNameTypes.SEARCH_NAME_REQUEST, SearchNameRequest);
}