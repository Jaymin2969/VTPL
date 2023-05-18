import { all, call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
//firebase
// import auth from '@react-native-firebase/auth';

import { request, setupHttpConfig } from '../../utils/http';
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_ERROR,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_ERROR,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_ERROR,
  GET_STATE_REQUEST,
  GET_STATE_SUCCESS,
  GET_STATE_ERROR,
  USER_FORGOT_PASSWORD_REQUEST,
  USER_FORGOT_PASSWORD_SUCCESS,
  USER_FORGOT_PASSWORD_ERROR,
  GET_PRODUCT_DETAILS_REQUEST,
  GET_PRODUCT_DETAILS_SUCCESS,
  GET_PRODUCT_DETAILS_ERROR,
  GET_CART_REQUEST,
  GET_CART_SUCCESS,
  GET_CART_ERROR,
  POST_USER_REQUEST,
  POST_USER_SUCCESS,
  POST_USER_ERROR,
  GET_USER_REQUEST,
  GET_CATEGORY_LIST_REQUEST,
  GET_CATEGORY_LIST_SUCCESS,
  GET_CATEGORY_LIST_ERROR,
  ADD_TO_CART_REQUEST,
  ADD_TO_CART_SUCCESS,
  ADD_TO_CART_ERROR,
  GET_CART_LIST_REQUEST,
  GET_CART_LIST_SUCCESS,
  GET_CART_LIST_ERROR,
  GET_USER_ERROR,
  GET_USER_SUCCESS,
  GET_HOME_PRODUCT_LIST_REQUEST,
  GET_HOME_PRODUCT_LIST_SUCCESS,
  GET_HOME_PRODUCT_LIST_ERROR,
  GET_ADDRESS_LIST_REQUEST,
  GET_ADDRESS_LIST_SUCCESS,
  GET_ADDRESS_LIST_ERROR,
  ADD_ADDRESS_SUCCESS,
  ADD_ADDRESS_ERROR,
  RESET_FLAGS,
  ADD_ADDRESS_REQUEST,
  GET_COUNTRY_REQUEST,
  GET_COUNTRY_SUCCESS,
  GET_COUNTRY_ERROR
} from '../reducers/listReducer';
import { getSimplifiedError } from '../../utils/error';
import TokenManager from '../../utils/TokenManager';
import { IS_PROCESSING_REQUEST } from '../reducers/systemReducer';
import { GET_LIST_ERROR, GET_LIST_REQUEST, GET_LIST_SUCCESS } from '../reducers/listReducer';

function showProcessing(isProcessing = false) {
  return {
    type: IS_PROCESSING_REQUEST,
    isProcessing,
  };
}


async function getStateListApi(payload) {
  const token = await TokenManager.retrieveToken()
  return axios.get('https://identity-service-test.dezensolutions.com/states/' + payload);
}

function* handleGetStateList(action) {
  try {
    console.log('action',action)
    yield put(showProcessing(true));
    const { status, data } = yield call(getStateListApi, action.payload);
    if (status === 200) {
      yield put({
        type: GET_STATE_SUCCESS,
        data,
      });
      yield put({
        type: RESET_FLAGS,
      });
    } else {
      yield put({
        type: GET_STATE_ERROR,
        error: 'Something went wrong, Please try again later',
      });
    }
  } catch (error) {
    console.log('login error', error);
    yield put({
      type: GET_STATE_ERROR,
      error: getSimplifiedError(error) || 'Something went wrong, Please try again later',
    });
  } finally {
    yield put(showProcessing());
  }
}

async function getCountryListApi(payload) {
  const token = await TokenManager.retrieveToken()
  return axios.get('https://identity-service-test.dezensolutions.com/get-active-countries', { params: payload, headers: { Authorization: `Bearer ${token}` } },);
}

function* handleGetCountryList(action) {
  try {
    yield put(showProcessing(true));
    const { status, data } = yield call(getCountryListApi, action.payload);
    if (status === 200) {
      yield put({
        type: GET_COUNTRY_SUCCESS,
        data,
      });
      yield put({
        type: RESET_FLAGS,
      });
    } else {
      yield put({
        type: GET_COUNTRY_ERROR,
        error: 'Something went wrong, Please try again later',
      });
    }
  } catch (error) {
    console.log('login error', error);
    yield put({
      type: GET_COUNTRY_ERROR,
      error: getSimplifiedError(error) || 'Something went wrong, Please try again later',
    });
  } finally {
    yield put(showProcessing());
  }
}

async function addAddressApi(payload) {
  const token = await TokenManager.retrieveToken()
  if (!payload?.update) return axios.post('https://identity-service-test.dezensolutions.com/address', payload?.params, { headers: { Authorization: `Bearer ${token}` } });
  return axios.patch('https://identity-service-test.dezensolutions.com/address', payload?.params, { headers: { Authorization: `Bearer ${token}` } });
}

function* handleAddAddress(action) {
  try {
    yield put(showProcessing(true));
    const { status, data } = yield call(addAddressApi, action.payload);
    if (status === 201) {
      yield put({
        type: ADD_ADDRESS_SUCCESS,
        data,
      });
      dispatch({
        type: RESET_FLAGS,
      })
    } else {
      yield put({
        type: ADD_ADDRESS_ERROR,
        error: 'Something went wrong, Please try again later',
      });
    }
  } catch (error) {
    console.log('login error', error);
    yield put({
      type: ADD_ADDRESS_ERROR,
      error: getSimplifiedError(error) || 'Something went wrong, Please try again later',
    });
  } finally {
    yield put(showProcessing());
  }
}
async function getAddressListApi(payload) {
  const token = await TokenManager.retrieveToken()
  return axios.get('https://identity-service-test.dezensolutions.com/user-address', { params: payload, headers: { Authorization: `Bearer ${token}` } },);
}

function* handleGetAddressList(action) {
  try {
    yield put(showProcessing(true));
    const { status, data } = yield call(getAddressListApi, action.payload);
    if (status === 200) {
      yield put({
        type: GET_ADDRESS_LIST_SUCCESS,
        data,
      });
      yield put({
        type: RESET_FLAGS,
      });
    } else {
      yield put({
        type: GET_ADDRESS_LIST_ERROR,
        error: 'Something went wrong, Please try again later',
      });
    }
  } catch (error) {
    console.log('login error', error);
    yield put({
      type: GET_ADDRESS_LIST_ERROR,
      error: getSimplifiedError(error) || 'Something went wrong, Please try again later',
    });
  } finally {
    yield put(showProcessing());
  }
}
async function getHomeProductListApi(payload) {
  return request.get('/public-home-products-list', { params: payload });
}

function* handleGetHomeProductList(action) {
  try {
    yield put(showProcessing(true));
    const { status, data } = yield call(getHomeProductListApi, action.payload);
    if (status === 200) {
      yield put({
        type: GET_HOME_PRODUCT_LIST_SUCCESS,
        data,
      });
      yield put({
        type: RESET_FLAGS,
      });
    } else {
      yield put({
        type: GET_HOME_PRODUCT_LIST_ERROR,
        error: 'Something went wrong, Please try again later',
      });
    }
  } catch (error) {
    console.log('login error', error);
    yield put({
      type: GET_HOME_PRODUCT_LIST_ERROR,
      error: getSimplifiedError(error) || 'Something went wrong, Please try again later',
    });
  } finally {
    yield put(showProcessing());
  }
}
async function getCartApi(payload) {
  return request.get('/get-cart');
}

function* handleGetCartList(

) {
  try {
    yield put(showProcessing(true));
    const { status, data } = yield call(getCartApi);
    if (status === 200) {
      yield put({
        type: GET_CART_LIST_SUCCESS,
        data,
      });
      yield put({
        type: RESET_FLAGS,
      });
    } else {
      yield put({
        type: GET_CART_LIST_ERROR,
        error: 'Something went wrong, Please try again later',
      });
    }
  } catch (error) {
    console.log('login error', error);
    yield put({
      type: GET_CART_LIST_ERROR,
      error: getSimplifiedError(error) || 'Something went wrong, Please try again later',
    });
  } finally {
    yield put(showProcessing());
  }
}
async function handleAddCartApi(payload) {
  return request.post('/add-cart', payload);
}

function* handleAddCart(action) {
  try {
    yield put(showProcessing(true));
    const { status, data } = yield call(handleAddCartApi, action.payload);
    if (status === 200) {
      yield put({
        type: ADD_TO_CART_SUCCESS,
        data,
      });
      yield put({
        type: GET_CART_REQUEST,
      });
      if (!data?.brand_id) {
        yield put({
          type: GET_CART_LIST_REQUEST,
        });
      }
      yield put({
        type: RESET_FLAGS,
      });
    } else {
      yield put({
        type: ADD_TO_CART_ERROR,
        error: 'Something went wrong, Please try again later',
      });
    }
  } catch (error) {
    console.log('login error', error);
    yield put({
      type: ADD_TO_CART_ERROR,
      error: getSimplifiedError(error) || 'Something went wrong, Please try again later',
    });
  } finally {
    yield put(showProcessing());
  }
}
async function getCategoryListApi(payload) {
  return request.get('/public-categories', { params: payload });
}

function* handlGetCategoryList(action) {
  try {
    yield put(showProcessing(true));
    const { status, data } = yield call(getCategoryListApi, action.payload);
    if (status === 200) {
      yield put({
        type: GET_CATEGORY_LIST_SUCCESS,
        data,
      });
    } else {
      yield put({
        type: GET_CATEGORY_LIST_ERROR,
        error: 'Something went wrong, Please try again later',
      });
    }
  } catch (error) {
    console.log('login error', error);
    yield put({
      type: GET_CATEGORY_LIST_ERROR,
      error: getSimplifiedError(error) || 'Something went wrong, Please try again later',
    });
  } finally {
    yield put(showProcessing());
  }
}

async function getUserApi(dataToken) {
  const token = await TokenManager.retrieveToken()
  return axios.get('https://identity-service-test.dezensolutions.com/user-profile', { headers: { Authorization: `Bearer ${token || dataToken}` } });
}

function* handlGetUser(action) {
  try {
    yield put(showProcessing(true));
    const { status, data } = yield call(getUserApi, action.payload);
    if (status === 200) {
      yield put({
        type: GET_USER_SUCCESS,
        data,
      });
    } else {
      yield put({
        type: GET_USER_ERROR,
        error: 'Something went wrong, Please try again later',
      });
    }
  } catch (error) {
    console.log('login error', error);
    const { displayName, phoneNumber, } = auth().currentUser
    const dataSave = {
      "name": displayName || '',
      "mobileNumber": phoneNumber || '2234567890',
      "role": "user",
      token: auth()?.currentUser?.getIdToken()
    }
    yield put({
      type: POST_USER_REQUEST,
      data: dataSave,
    });
    yield put({
      type: GET_USER_ERROR,
      error: getSimplifiedError(error) || 'Something went wrong, Please try again later',
    });
  } finally {
    yield put(showProcessing());
  }
}
function postUserApi(payload) {
  const token = payload?.token
  delete payload?.token
  return axios.post('http://65.0.73.160:3000/user', payload, { headers: { Authorization: `Bearer ${token}` } });
}

function* handlPostUser(action) {
  try {
    yield put(showProcessing(true));
    const { status, data } = yield call(postUserApi, action.payload);
    if (status === 200) {
      yield put({
        type: POST_USER_SUCCESS,
        data,
      });
    } else {
      yield put({
        type: POST_USER_ERROR,
        error: 'Something went wrong, Please try again later',
      });
    }
  } catch (error) {
    console.log('login error', error);
    yield put({
      type: POST_USER_ERROR,
      error: getSimplifiedError(error) || 'Something went wrong, Please try again later',
    });
  } finally {
    yield put(showProcessing());
  }
}
async function cartCountApi(payload) {
  const token = await TokenManager.retrieveToken()
  return request.get('/get-cart-count', { headers: { Authorization: `Bearer ${token}` } });
}

function* handleCartCount(action) {
  try {
    yield put(showProcessing(true));
    const { status, data } = yield call(cartCountApi, action.payload);
    if (status === 200) {
      yield put({
        type: GET_CART_SUCCESS,
        data,
      });
    } else {
      yield put({
        type: GET_CART_ERROR,
        error: 'Something went wrong, Please try again later',
      });
    }
  } catch (error) {
    console.log('login error', error);
    yield put({
      type: GET_CART_ERROR,
      error: getSimplifiedError(error) || 'Something went wrong, Please try again later',
    });
  } finally {
    yield put(showProcessing());
  }
}
function productDeatilsApi(payload) {
  return request.get('/public-product/' + payload);
}

function* handleProdctDetails(action) {
  try {
    yield put(showProcessing(true));
    const { status, data } = yield call(productDeatilsApi, action.payload);
    if (status === 200) {
      yield put({
        type: GET_PRODUCT_DETAILS_SUCCESS,
        data,
      });
    } else {
      yield put({
        type: GET_PRODUCT_DETAILS_ERROR,
        error: 'Something went wrong, Please try again later',
      });
    }
  } catch (error) {
    console.log('login error', error);
    yield put({
      type: GET_PRODUCT_DETAILS_ERROR,
      error: getSimplifiedError(error) || 'Something went wrong, Please try again later',
    });
  } finally {
    yield put(showProcessing());
  }
}
function listApi(payload) {
  return axios.get('http://116.72.19.220:800/Api/SOStatusFilter',{params:payload});
}

function* handleList(action) {
  try {
    yield put(showProcessing(true));
    const { status, data } = yield call(listApi, action.payload);
    if (status === 200) {
      yield put({
        type: GET_LIST_SUCCESS,
        data,
      });
    } else {
      yield put({
        type: GET_LIST_ERROR,
        error: 'Something went wrong, Please try again later',
      });
    }
  } catch (error) {
    console.log('login error', error);
    yield put({
      type: GET_LIST_ERROR,
      error: getSimplifiedError(error) || 'Something went wrong, Please try again later',
    });
  } finally {
    yield put(showProcessing());
  }
}
function login(payload) {
  return request.post('/auth/login', payload);
}

function* handleLogin(action) {
  try {
    yield put(showProcessing(true));
    const { status, data } = yield call(login, action.payload);
    const { user, token } = data;
    if (status === 200) {
      yield TokenManager.saveToken(token);
      yield setupHttpConfig();
      yield put({
        type: USER_LOGIN_SUCCESS,
        data: user,
      });
    } else {
      yield put({
        type: USER_LOGIN_ERROR,
        error: 'Something went wrong, Please try again later',
      });
    }
  } catch (error) {
    console.log('login error', error);
    yield put({
      type: USER_LOGIN_ERROR,
      error: getSimplifiedError(error) || 'Something went wrong, Please try again later',
    });
  } finally {
    yield put(showProcessing());
  }
}

function register(payload) {
  return request.post('/auth/register', payload);
}

function* handleRegister(action) {
  try {
    yield put(showProcessing(true));
    const { status, data } = yield call(register, action.payload);
    const { user, token } = data;
    if (status === 200) {
      yield TokenManager.saveToken(token);
      yield setupHttpConfig();
      yield put({
        type: USER_REGISTER_SUCCESS,
        data: user,
      });
    } else {
      yield put({
        type: USER_REGISTER_ERROR,
        error: 'Something went wrong, Please try again later',
      });
    }
  } catch (error) {
    console.log('signup error :', error);
    yield put({
      type: USER_REGISTER_ERROR,
      error: getSimplifiedError(error) || 'Something went wrong, Please try again later',
    });
  } finally {
    yield put(showProcessing());
  }
}

function resetPasswordApi(payload) {
  return request.post('/user/change-password', payload);
}

function* handleResetPassword(action) {
  try {
    yield put(showProcessing(true));
    const { status, data } = yield call(resetPasswordApi, action.payload);
    if (status === 200) {
      yield put({
        type: RESET_PASSWORD_SUCCESS,
        data,
      });
    } else {
      yield put({
        type: RESET_PASSWORD_ERROR,
        error: 'Something went wrong, Please try again later',
      });
    }
  } catch (error) {
    console.log('error :', error);
    yield put({
      type: RESET_PASSWORD_ERROR,
      error: getSimplifiedError(error) || 'Something went wrong, Please try again later',
    });
  } finally {
    yield put(showProcessing());
  }
}

function getStateApi() {
  return request.get('/auth/states');
}

function* handleGetState({ payload }) {
  try {
    yield put(showProcessing(payload));
    const { status, data } = yield call(getStateApi);
    if (status === 200) {
      yield put({
        type: GET_STATE_SUCCESS,
        data,
      });
    } else {
      yield put({
        type: GET_STATE_ERROR,
        error: 'Something went wrong, Please try again later',
      });
    }
  } catch (error) {
    console.log('error :', error);
    yield put({
      type: GET_STATE_ERROR,
      error: getSimplifiedError(error) || 'Something went wrong, Please try again later',
    });
  } finally {
    yield put(showProcessing());
  }
}

function fogotPasswordApi(payload) {
  return request.post('/auth/forgot-password', payload);
}

function* handleForgotPassword(action) {
  try {
    yield put(showProcessing(true));
    const { status, data } = yield call(fogotPasswordApi, action.payload);
    if (status === 200) {
      yield put({
        type: USER_FORGOT_PASSWORD_SUCCESS,
        data,
      });
    } else {
      yield put({
        type: USER_FORGOT_PASSWORD_ERROR,
        error: 'Something went wrong, Please try again later',
      });
    }
  } catch (error) {
    console.log('error :', error);
    yield put({
      type: USER_FORGOT_PASSWORD_ERROR,
      error: getSimplifiedError(error) || 'Something went wrong, Please try again later',
    });
  } finally {
    yield put(showProcessing());
  }
}

export default all([
  takeLatest(GET_STATE_REQUEST, handleGetStateList),
  takeLatest(GET_COUNTRY_REQUEST, handleGetCountryList),
  takeLatest(ADD_ADDRESS_REQUEST, handleAddAddress),
  takeLatest(GET_ADDRESS_LIST_REQUEST, handleGetAddressList),
  takeLatest(GET_HOME_PRODUCT_LIST_REQUEST, handleGetHomeProductList),
  takeLatest(GET_CART_LIST_REQUEST, handleGetCartList),
  takeLatest(ADD_TO_CART_REQUEST, handleAddCart),
  takeLatest(GET_CATEGORY_LIST_REQUEST, handlGetCategoryList),
  takeLatest(GET_USER_REQUEST, handlGetUser),
  takeLatest(POST_USER_REQUEST, handlPostUser),
  takeLatest(GET_CART_REQUEST, handleCartCount),
  takeLatest(GET_LIST_REQUEST, handleList),
  takeLatest(GET_PRODUCT_DETAILS_REQUEST, handleProdctDetails),
]);
