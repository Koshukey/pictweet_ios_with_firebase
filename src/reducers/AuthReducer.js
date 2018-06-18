import {
    EMAIL_CHANGED,
    LOGIN_USER_SUCCESS,
    PASSWORD_CHANGED,
    LOGIN_USER_FAIL,
    LOGIN_USER,
    NICKNAME_CHANGED,
    ENROLL_NICKNAME
} from "../actions/types";

const INITIAL_STATE = {
    email: '',
    password:'',
    user: null,
    error: '',
    loading: false,
    nickname: ''
};

export default (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case EMAIL_CHANGED:
            return {...state, email: action.payload };
        case PASSWORD_CHANGED:
            return {...state, password: action.payload };
        case NICKNAME_CHANGED:
            return {...state, nickname: action.payload };
        case LOGIN_USER:
            return {...state, loading: true, error: ''};
        case ENROLL_NICKNAME:
            return {...state, ...INITIAL_STATE, user: action.payload };
        case LOGIN_USER_SUCCESS:
            return {...state, ...INITIAL_STATE, user: action.payload };
        case LOGIN_USER_FAIL:
            return {...state, error: 'Authentication Failed.', password: '', loading: false};

        default:
            return state;
    }
};