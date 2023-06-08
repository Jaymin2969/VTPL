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

export const GET_CART_REQUEST = 'GET_CART_REQUEST';
export const GET_CART_SUCCESS = 'GET_CART_SUCCESS';
export const GET_CART_ERROR = 'GET_CART_ERROR';

export const POST_USER_REQUEST = 'POST_USER_REQUEST';
export const POST_USER_SUCCESS = 'POST_USER_SUCCESS';
export const POST_USER_ERROR = 'POST_USER_ERROR';

export const GET_USER_REQUEST = 'GET_USER_REQUEST';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_ERROR = 'GET_USER_ERROR';

export const GET_CATEGORY_LIST_REQUEST = 'GET_CATEGORY_LIST_REQUEST';
export const GET_CATEGORY_LIST_SUCCESS = 'GET_CATEGORY_LIST_SUCCESS';
export const GET_CATEGORY_LIST_ERROR = 'GET_CATEGORY_LIST_ERROR';

export const ADD_TO_CART_REQUEST = 'ADD_TO_CART_REQUEST';
export const ADD_TO_CART_SUCCESS = 'ADD_TO_CART_SUCCESS';
export const ADD_TO_CART_ERROR = 'ADD_TO_CART_ERROR';

export const GET_CART_LIST_REQUEST = 'GET_CART_LIST_REQUEST';
export const GET_CART_LIST_SUCCESS = 'GET_CART_LIST_SUCCESS';
export const GET_CART_LIST_ERROR = 'GET_CART_LIST_ERROR';

export const GET_HOME_PRODUCT_LIST_REQUEST = 'GET_HOME_PRODUCT_LIST_REQUEST';
export const GET_HOME_PRODUCT_LIST_SUCCESS = 'GET_HOME_PRODUCT_LIST_SUCCESS';
export const GET_HOME_PRODUCT_LIST_ERROR = 'GET_HOME_PRODUCT_LIST_ERROR';

export const GET_ADDRESS_LIST_REQUEST = 'GET_ADDRESS_LIST_REQUEST';
export const GET_ADDRESS_LIST_SUCCESS = 'GET_ADDRESS_LIST_SUCCESS';
export const GET_ADDRESS_LIST_ERROR = 'GET_ADDRESS_LIST_ERROR';

export const GET_COUNTRY_REQUEST = 'GET_COUNTRY_REQUEST';
export const GET_COUNTRY_SUCCESS = 'GET_COUNTRY_SUCCESS';
export const GET_COUNTRY_ERROR = 'GET_COUNTRY_ERROR';

export const ADD_ADDRESS_REQUEST = 'ADD_ADDRESS_REQUEST';
export const ADD_ADDRESS_SUCCESS = 'ADD_ADDRESS_SUCCESS';
export const ADD_ADDRESS_ERROR = 'ADD_ADDRESS_ERROR';

export const GET_LIST_REQUEST = 'GET_LIST_REQUEST';
export const GET_LIST_SUCCESS = 'GET_LIST_SUCCESS';
export const GET_LIST_ERROR = 'GET_LIST_ERROR';

export const GET_PRODUCT_DETAILS_REQUEST = 'GET_PRODUCT_DETAILS_REQUEST';
export const GET_PRODUCT_DETAILS_SUCCESS = 'GET_PRODUCT_DETAILS_SUCCESS';
export const GET_PRODUCT_DETAILS_ERROR = 'GET_PRODUCT_DETAILS_ERROR';

export const GET_STATE_REQUEST = 'GET_STATE_REQUEST';
export const GET_STATE_SUCCESS = 'GET_STATE_SUCCESS';
export const GET_STATE_ERROR = 'GET_STATE_ERROR';

export const RESET_FLAGS = 'RESET_FLAGS';

const initialState = {
  user: null,
  resetPassword: null,
  stateList: null,
  productList: [],
  productDetails: {},
  cartCount: null,
  postUser: null,
  userData: null,
  categoryList: [],
  cartList: {},
  addToCart: {},
  homeProductList: [],
  addressList: [],
  countryList: [],
  stateList: [],
  addAddress: null,
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
    countryList: null,
    stateList: null,
  },
  flags: {
    loginSuccess: false,
    registerSuccess: false,
    forgotPasswordSuccess: false,
    resetPasswordSuccess: false,
    stateListSuccess: false,
    productListSuccess: false,
    productDetailsSuccess: false,
    cartCountSuccess: false,
    postUserSuccess: false,
    userDataSuccess: false,
    categoryListSuccess: false,
    addToCartSuccess: false,
    cartListSuccess: false,
    getHomeProductListSuccess: false,
    addressListSuccess: false,
    addAddressSuccess: false,
    countryListSuccess: false,
    stateListSuccess: false,
  },
};

export const ListReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_STATE_SUCCESS:
      return {
        ...state,
        flags: {stateListSuccess: true},
        stateList: action.data?.map(i => {
          return {...i, label: i.name, value: i.id};
        }),
      };
    case GET_STATE_ERROR:
      return {...state, errors: {stateList: action.error}};
    case GET_COUNTRY_SUCCESS:
      return {
        ...state,
        flags: {countryListSuccess: true},
        countryList: action.data,
      };
    case GET_COUNTRY_ERROR:
      return {...state, errors: {countryList: action.error}};
    case ADD_ADDRESS_SUCCESS:
      return {
        ...state,
        flags: {addAddressSuccess: true},
        addAddress: action.data,
      };
    case ADD_ADDRESS_ERROR:
      return {...state, errors: {addAddress: action.error}};
    case GET_ADDRESS_LIST_SUCCESS:
      return {
        ...state,
        flags: {addressListSuccess: true},
        addressList: action.data,
      };
    case GET_ADDRESS_LIST_ERROR:
      return {...state, errors: {addressList: action.error}};
    case GET_HOME_PRODUCT_LIST_SUCCESS:
      return {
        ...state,
        flags: {getHomeProductListSuccess: true},
        homeProductList: action.data,
      };
    case GET_HOME_PRODUCT_LIST_ERROR:
      return {...state, errors: {getHomeProductList: action.error}};
    case GET_CART_LIST_SUCCESS:
      return {...state, flags: {cartListSuccess: true}, cartList: action.data};
    case GET_CART_LIST_ERROR:
      return {...state, errors: {cartList: action.error}};
    case ADD_TO_CART_SUCCESS:
      return {
        ...state,
        flags: {addToCartSuccess: true},
        addToCart: action.data,
      };
    case ADD_TO_CART_ERROR:
      return {...state, errors: {addToCart: action.error}};
    case GET_CATEGORY_LIST_SUCCESS:
      return {
        ...state,
        flags: {categoryListSuccess: true},
        categoryList: [...state.categoryList, ...action.data],
      };
    case GET_CATEGORY_LIST_ERROR:
      return {...state, errors: {categoryList: action.error}};
    case GET_USER_SUCCESS:
      return {...state, flags: {userDataSuccess: true}, userData: action.data};
    case GET_USER_ERROR:
      return {...state, errors: {userData: action.error}};
    case POST_USER_SUCCESS:
      return {...state, flags: {postUserSuccess: true}, postUser: action.data};
    case POST_USER_ERROR:
      return {...state, errors: {postUser: action.error}};
    case GET_CART_SUCCESS:
      return {
        ...state,
        flags: {cartCountSuccess: true},
        cartCount: action.data,
      };
    case GET_CART_ERROR:
      return {...state, errors: {cartCount: action.error}};
    case GET_PRODUCT_DETAILS_SUCCESS:
      return {
        ...state,
        flags: {productDetailsSuccess: true},
        productDetails: action.data,
      };
    case GET_PRODUCT_DETAILS_ERROR:
      return {...state, errors: {productDetails: action.error}};
    case GET_LIST_SUCCESS:
      return {
        ...state,
        flags: {productListSuccess: true},
        productList: action.data,
      };
    case GET_LIST_ERROR:
      return {...state, errors: {productList: action.error}};
    case GET_STATE_ERROR:
      return {...state, errors: {stateList: action.error}};
    case RESET_FLAGS:
      return {...state, errors: initialState.errors, flags: initialState.flags};
    default:
      return state;
  }
};
