export const USER_REGISTER_REQUEST = 'USER_REGISTER_REQUEST';
export const USER_REGISTER_SUCCESS = 'USER_REGISTER_SUCCESS';
export const USER_REGISTER_ERROR = 'USER_REGISTER_ERROR';
export const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_ERROR = 'USER_LOGIN_ERROR';
export const USER_FORGOT_PASSWORD_REQUEST = 'USER_FORGOTPASSWORD_REQUEST';
export const USER_FORGOT_PASSWORD_SUCCESS = 'USER_FORGOTPASSWORD_SUCCESS';
export const USER_FORGOT_PASSWORD_ERROR = 'USER_FORGOTPASSWORD_ERROR';

export const RESET_PASSWORD_REQUEST = 'RESET_PASSWORD_REQUEST';
export const RESET_PASSWORD_SUCCESS = 'RESET_PASSWORD_SUCCESS';
export const RESET_PASSWORD_ERROR = 'RESET_PASSWORD_ERROR';

export const GET_STATE_REQUEST = 'GET_STATE_REQUEST';
export const GET_STATE_SUCCESS = 'GET_STATE_SUCCESS';
export const GET_STATE_ERROR = 'GET_STATE_ERROR';

export const RESET_FLAGS = 'RESET_FLAGS';

const initialState = {
  user: null,
  resetPassword: null,
  stateList: null,
  errors: {
    login: null,
    register: null,
    forgotPassword: null,
    resetPassword: null,
    stateList: null,
    productList: null,
    productDetails: null,
    cartCount: null,
    postUser: null,
    userData: null,
    categoryList: null,
    addToCart: null,
    cartList: null,
    getHomeProductList: null,
    addressList: null,
    addAddress: null,
  },
  flags: {
    loginSuccess: false,
    registerSuccess: false,
    forgotPasswordSuccess: false,
    resetPasswordSuccess: false,
    stateListSuccess: false,
  },
};

export const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_REGISTER_SUCCESS:
      return {...state, flags: {registerSuccess: true}, user: action.data};
    case USER_REGISTER_ERROR:
      return {...state, errors: {register: action.error}};
    case USER_LOGIN_SUCCESS:
      return {...state, flags: {loginSuccess: true}, user: action.data};
    case USER_LOGIN_ERROR:
      return {...state, errors: {login: action.error}};
    case RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        flags: {resetPasswordSuccess: true},
        resetPassword: action.data,
      };
    case RESET_PASSWORD_ERROR:
      return {...state, errors: {resetPassword: action.error}};
    case USER_FORGOT_PASSWORD_SUCCESS:
      return {...state, flags: {forgotPasswordSuccess: true}};
    case USER_FORGOT_PASSWORD_ERROR:
      return {...state, errors: {forgotPassword: action.error}};
    case GET_STATE_SUCCESS:
      let stateData = action.data.map(i => {
        return {value: i.state, label: i.state, city: i.cities};
      });
      return {...state, flags: {stateListSuccess: true}, stateList: stateData};
    case GET_STATE_ERROR:
      return {...state, errors: {stateList: action.error}};
    case RESET_FLAGS:
      return {...state, errors: initialState.errors, flags: initialState.flags};
    default:
      return state;
  }
};
