import {
    RESET_FLAGS,
    USER_LOGIN_REQUEST,
    USER_REGISTER_REQUEST,
} from '../reducers/authReducer';

export const loginUser = (payload) => ({
    type: USER_LOGIN_REQUEST,
    payload,
});

export const register = (payload) => ({
    type: USER_REGISTER_REQUEST,
    payload,
});

export const resetFlags = () => ({
    type: RESET_FLAGS,
});
