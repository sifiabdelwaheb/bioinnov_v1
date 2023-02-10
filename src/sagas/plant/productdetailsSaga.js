import { takeLatest, put, call } from "redux-saga/effects";
import { BaseURL } from "../../utils/baseURL";
import axiosRequest from "../../utils/requests";

import ProductActions, {
  ProductTypes,
} from "../../redux/plant/productDetailRedux";

function* productRequest({ data }) {
  try {
    let response = yield call(
      axiosRequest,
      "post",
      BaseURL,
      "/productdetails",
      data
    );

    yield put(ProductActions.ProductSuccess(response.data));
  } catch (e) {
    yield put(ProductActions.ProductFailure(e));
  }
}

export default function* ProductDetails() {
  yield takeLatest(ProductTypes.PRODUCT_REQUEST, productRequest);
}
