import {all, call, put, takeLatest} from 'redux-saga/effects';
import axios from 'axios';
import Toast from 'react-native-toast-message';

import {request, setupHttpConfig} from '../../utils/http';
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
  RESET_FLAGS,
} from '../reducers/authReducer';
import {getSimplifiedError} from '../../utils/error';
// import TokenManager from '../../utils/TokenManager';
import {IS_PROCESSING_REQUEST} from '../reducers/systemReducer';
import TokenManager from '../../utils/TokenManager';

function showProcessing(isProcessing = false) {
  return {
    type: IS_PROCESSING_REQUEST,
    isProcessing,
  };
}

function login(payload) {
  return axios.get('https://vyaratiles.co.in/Api/ERPAuth', {params: payload});
}
function* handleLogin(action) {
  try {
    yield put(showProcessing(true));
    yield TokenManager.saveToken(action.payload.UserID, 'UserId');
    const {status, data} = yield call(login, action.payload);
    if (status === 200) {
      yield TokenManager.saveToken(data.Message);
      // yield setupHttpConfig();
      yield put({
        type: USER_LOGIN_SUCCESS,
        data,
      });
      yield put({
        type: RESET_FLAGS,
      });
    } else {
      yield put({
        type: USER_LOGIN_ERROR,
        error: 'Something went wrong, Please try again later',
      });
    }
  } catch (error) {
    console.log('login error===>', error);
    Toast.show({
      type: 'error',
      text1: 'Error',
      text2: error.message,
    });
    yield put({
      type: USER_LOGIN_ERROR,
      error:
        getSimplifiedError(error) ||
        'Something went wrong, Please try again later',
    });
  } finally {
    yield put(showProcessing());
  }
}

function register(payload) {
  return axios.post('https://vyaratiles.co.in/Api/ERPAuth/register', payload);
}

function* handleRegister(action) {
  try {
    yield put(showProcessing(true));
    const {status, data} = yield call(register, action.payload);
    // const { user, token } = data;
    if (status === 201) {
      // yield TokenManager.saveToken(token);
      yield setupHttpConfig();
      yield put({
        type: USER_REGISTER_SUCCESS,
        data: '',
      });
      dispatch({
        type: RESET_FLAGS,
      });
    } else {
      yield put({
        type: USER_REGISTER_ERROR,
        error: 'Something went wrong, Please try again later',
      });
    }
  } catch (error) {
    Toast.show({
      type: 'error',
      text1: 'Error',
      text2: error.message,
    });
    console.log('signup error :', error);
    yield put({
      type: USER_REGISTER_ERROR,
      error:
        getSimplifiedError(error) ||
        'Something went wrong, Please try again later',
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
    const {status, data} = yield call(resetPasswordApi, action.payload);
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
    Toast.show({
      type: 'error',
      text1: 'Error',
      text2: error.message,
    });
    console.log('error :', error);
    yield put({
      type: RESET_PASSWORD_ERROR,
      error:
        getSimplifiedError(error) ||
        'Something went wrong, Please try again later',
    });
  } finally {
    yield put(showProcessing());
  }
}

function getStateApi() {
  return request.get('/auth/states');
}

function* handleGetState({payload}) {
  try {
    yield put(showProcessing(payload));
    const {status, data} = yield call(getStateApi);
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
    Toast.show({
      type: 'error',
      text1: 'Error',
      text2: error.message,
    });
    console.log('error :', error);
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

function fogotPasswordApi(payload) {
  return request.post('/auth/forgot-password', payload);
}

function* handleForgotPassword(action) {
  try {
    yield put(showProcessing(true));
    const {status, data} = yield call(fogotPasswordApi, action.payload);
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
    Toast.show({
      type: 'error',
      text1: 'Error',
      text2: error.message,
    });
    console.log('error :', error);
    yield put({
      type: USER_FORGOT_PASSWORD_ERROR,
      error:
        getSimplifiedError(error) ||
        'Something went wrong, Please try again later',
    });
  } finally {
    yield put(showProcessing());
  }
}

export default all([
  takeLatest(USER_LOGIN_REQUEST, handleLogin),
  takeLatest(USER_REGISTER_REQUEST, handleRegister),
  takeLatest(RESET_PASSWORD_REQUEST, handleResetPassword),
  takeLatest(USER_FORGOT_PASSWORD_REQUEST, handleForgotPassword),
  takeLatest(GET_STATE_REQUEST, handleGetState),
]);
