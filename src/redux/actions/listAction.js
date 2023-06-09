import {
  RESET_FLAGS,
  GET_STATE_REQUEST,
  GET_LIST_REQUEST,
  GET_PRODUCT_DETAILS_REQUEST,
  GET_CART_REQUEST,
  POST_USER_REQUEST,
  GET_USER_REQUEST,
  GET_CATEGORY_LIST_REQUEST,
  ADD_TO_CART_REQUEST,
  GET_CART_LIST_REQUEST,
  GET_HOME_PRODUCT_LIST_REQUEST,
  GET_ADDRESS_LIST_REQUEST,
  ADD_ADDRESS_REQUEST,
  GET_COUNTRY_REQUEST,
} from '../reducers/listReducer';

export const getLedgerList = payload => ({
  type: GET_COUNTRY_REQUEST,
  payload,
});
export const getStates = payload => ({
  type: GET_STATE_REQUEST,
  payload,
});
export const getDispPlanDataList = payload => ({
  type: GET_ADDRESS_LIST_REQUEST,
  payload,
});
export const getSOStatus = payload => ({
  type: ADD_ADDRESS_REQUEST,
  payload,
});
export const getHomeProductList = payload => ({
  type: GET_HOME_PRODUCT_LIST_REQUEST,
  payload,
});

export const getCartList = payload => ({
  type: GET_CART_LIST_REQUEST,
  payload,
});
export const addLedger = payload => ({
  type: ADD_TO_CART_REQUEST,
  payload,
});
export const getCategoryList = payload => ({
  type: GET_CATEGORY_LIST_REQUEST,
  payload,
});
export const getDispPlanSO = payload => ({
  type: GET_USER_REQUEST,
  payload,
});
export const dispPlan = payload => ({
  type: POST_USER_REQUEST,
  payload,
});

export const getCartCount = payload => ({
  type: GET_CART_REQUEST,
  payload,
});
export const getProductList = payload => ({
  type: GET_LIST_REQUEST,
  payload,
});
export const getProductDetail = payload => ({
  type: GET_PRODUCT_DETAILS_REQUEST,
  payload,
});

export const getState = payload => ({
  type: GET_STATE_REQUEST,
  payload,
});


export const resetFlags = () => ({
  type: RESET_FLAGS,
});
