import {all, call, put, takeLatest} from 'redux-saga/effects';
import axios from 'axios';
//firebase
// import auth from '@react-native-firebase/auth';
import Toast from 'react-native-toast-message';

import {request, setupHttpConfig} from '../../utils/http';
import {
  GET_STATE_REQUEST,
  GET_STATE_SUCCESS,
  GET_STATE_ERROR,
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
  GET_COUNTRY_ERROR,
} from '../reducers/listReducer';
import {getSimplifiedError} from '../../utils/error';
import TokenManager from '../../utils/TokenManager';
import {IS_PROCESSING_REQUEST} from '../reducers/systemReducer';
import {
  GET_LIST_ERROR,
  GET_LIST_REQUEST,
  GET_LIST_SUCCESS,
} from '../reducers/listReducer';
import {showErrorToast} from '../../utils/Utils';

function showProcessing(isProcessing = false) {
  return {
    type: IS_PROCESSING_REQUEST,
    isProcessing,
  };
}

async function getStateListApi(payload) {
  const token = await TokenManager.retrieveToken();
  return axios.get(
    'https://identity-service-test.dezensolutions.com/states/' + payload,
  );
}

function* handleGetStateList(action) {
  try {
    console.log('action', action);
    yield put(showProcessing(true));
    const {status, data} = yield call(getStateListApi, action.payload);
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
    showErrorToast(error.response.data.Message);
    console.log('login error', error);
    yield put({
      type: GET_STATE_ERROR,
      error:
        getSimplifiedError(error) ||
        'Something went wrong, Please try again later',
    });
  } finally {
    yield put(showProcessing());
  }
}

async function getCountryListApi(payload) {
  const token = await TokenManager.retrieveToken();
  return axios.get('https://vyaratiles.co.in/Api/LedgerFilter', {
    params: payload,
  });
}

function* handleGetCountryList(action) {
  try {
    yield put(showProcessing(true));
    const {status, data} = yield call(getCountryListApi, action.payload);
    if (status === 200) {
      yield put({
        type: GET_COUNTRY_SUCCESS,
        data,
      });
      yield put({
        type: ADD_ADDRESS_SUCCESS,
        data,
      });
      yield put({
        type: RESET_FLAGS,
      });
    } else {
      showErrorToast(data.Message);
      yield put({
        type: GET_COUNTRY_ERROR,
        error: 'Something went wrong, Please try again later',
      });
    }
  } catch (error) {
    showErrorToast(error.response.data.Message);
    console.log('login error', error);
    yield put({
      type: GET_COUNTRY_ERROR,
      error:
        getSimplifiedError(error) ||
        'Something went wrong, Please try again later',
    });
  } finally {
    yield put(showProcessing());
  }
}

async function addAddressApi(payload) {
  return axios.post('https://vyaratiles.co.in/Api/SOStatus', payload);
}

function* handleAddAddress(action) {
  try {
    yield put(showProcessing(true));
    const {status, data} = yield call(addAddressApi, action.payload);
    if (status === 200) {
      yield put({
        type: ADD_ADDRESS_SUCCESS,
        data,
      });
      yield put({
        type: RESET_FLAGS,
      });
    } else {
      yield put({
        type: ADD_ADDRESS_ERROR,
        error: 'Something went wrong, Please try again later',
      });
    }
  } catch (error) {
    showErrorToast(error.response.data.Message);
    yield put({
      type: ADD_ADDRESS_ERROR,
      error:
        getSimplifiedError(error) ||
        'Something went wrong, Please try again later',
    });
  } finally {
    yield put(showProcessing());
  }
}
async function getAddressListApi(payload) {
  const token = await TokenManager.retrieveToken();
  return axios.get('https://vyaratiles.co.in/Api/DispPlanData', {
    params: payload,
  });
}

function* handleGetAddressList(action) {
  try {
    yield put(showProcessing(true));
    const {status, data} = yield call(getAddressListApi, action.payload);
    if (status === 200) {
      yield put({
        type: GET_ADDRESS_LIST_SUCCESS,
        data,
      });
      yield put({
        type: RESET_FLAGS,
      });
    } else {
      showErrorToast(data.Message);
      yield put({
        type: GET_ADDRESS_LIST_ERROR,
        error: 'Something went wrong, Please try again later',
      });
    }
  } catch (error) {
    showErrorToast(error.response.data.Message);
    yield put({
      type: GET_ADDRESS_LIST_ERROR,
      error:
        getSimplifiedError(error) ||
        'Something went wrong, Please try again later',
    });
  } finally {
    yield put(showProcessing());
  }
}
async function getHomeProductListApi(payload) {
  return request.get('/public-home-products-list', {params: payload});
}

function* handleGetHomeProductList(action) {
  try {
    yield put(showProcessing(true));
    const {status, data} = yield call(getHomeProductListApi, action.payload);
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
    showErrorToast(error.response.data.Message);
    console.log('login error', error);
    yield put({
      type: GET_HOME_PRODUCT_LIST_ERROR,
      error:
        getSimplifiedError(error) ||
        'Something went wrong, Please try again later',
    });
  } finally {
    yield put(showProcessing());
  }
}
async function getCartApi(payload) {
  return request.get('/get-cart');
}

function* handleGetCartList() {
  try {
    yield put(showProcessing(true));
    const {status, data} = yield call(getCartApi);
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
    showErrorToast(error.response.data.Message);
    console.log('login error', error);
    yield put({
      type: GET_CART_LIST_ERROR,
      error:
        getSimplifiedError(error) ||
        'Something went wrong, Please try again later',
    });
  } finally {
    yield put(showProcessing());
  }
}
async function handleAddCartApi(payload) {
  return axios.get('https://vyaratiles.co.in/Api/Ledger', {params: payload});
}

function* handleAddCart(action) {
  try {
    yield put(showProcessing(true));
    const {status, data} = yield call(handleAddCartApi, action.payload);
    if (status === 200) {
      yield put({
        type: ADD_TO_CART_SUCCESS,
        data,
      });
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
    showErrorToast(error.response.data.Message);
    console.log('login error', error);
    yield put({
      type: ADD_TO_CART_ERROR,
      error:
        getSimplifiedError(error) ||
        'Something went wrong, Please try again later',
    });
  } finally {
    yield put(showProcessing());
  }
}
async function getCategoryListApi(payload) {
  return request.get('/public-categories', {params: payload});
}

function* handlGetCategoryList(action) {
  try {
    yield put(showProcessing(true));
    const {status, data} = yield call(getCategoryListApi, action.payload);
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
    showErrorToast(error.response.data.Message);
    console.log('login error', error);
    yield put({
      type: GET_CATEGORY_LIST_ERROR,
      error:
        getSimplifiedError(error) ||
        'Something went wrong, Please try again later',
    });
  } finally {
    yield put(showProcessing());
  }
}

async function getUserApi(payload) {
  const token = await TokenManager.retrieveToken();
  return axios.get('https://vyaratiles.co.in/Api/DispPlanSO', {
    params: payload,
  });
}

function* handlGetUser(action) {
  try {
    yield put(showProcessing(true));
    const {status, data} = yield call(getUserApi, action.payload);
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
    showErrorToast(error.response.data.Message);
  } finally {
    yield put(showProcessing());
  }
}
function postUserApi(payload) {
  return axios.post('https://vyaratiles.co.in/Api/DispPlan', payload.body);
}

function* handlPostUser(action) {
  try {
    yield put(showProcessing(true));
    const {status, data} = yield call(postUserApi, action.payload);
    if (status === 200) {
      yield put({
        type: POST_USER_SUCCESS,
        data,
      });
      yield put({
        type: RESET_FLAGS,
      });
    } else {
      yield put({
        type: POST_USER_ERROR,
        error: 'Something went wrong, Please try again later',
      });
    }
  } catch (error) {
    showErrorToast(error.response.data.Message);
    console.log('login error', error);
    yield put({
      type: POST_USER_ERROR,
      error:
        getSimplifiedError(error) ||
        'Something went wrong, Please try again later',
    });
  } finally {
    yield put(showProcessing());
  }
}

function listApi(payload) {
  return axios.get('https://vyaratiles.co.in/Api/SOStatusFilter', {
    params: payload,
  });
}

function* handleList(action) {
  try {
    yield put(showProcessing(true));
    const {status, data} = yield call(listApi, action.payload);
    if (status === 200) {
      yield put({
        type: GET_LIST_SUCCESS,
        data,
      });
    } else {
      showErrorToast(data.Message);
      yield put({
        type: GET_LIST_ERROR,
        error: 'Something went wrong, Please try again later',
      });
    }
  } catch (error) {
    showErrorToast(error.response.data.Message);
    console.log('login error', error);
    yield put({
      type: GET_LIST_ERROR,
      error:
        getSimplifiedError(error) ||
        'Something went wrong, Please try again later',
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
  takeLatest(GET_LIST_REQUEST, handleList),
]);
