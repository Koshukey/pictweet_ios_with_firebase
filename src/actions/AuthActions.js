import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER,
    NICKNAME_CHANGED,
    SAVE_NICKNAME,
    FETCH_USERID_WITH_NICKNAME
} from "./types";
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};

export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    };
};

export const nicknameChanged = (text) => {
    return {
        type: NICKNAME_CHANGED,
        payload: text
    };
};

export const saveNickname = ({ nickname }) => {

    const { currentUser } = firebase.auth();

    const userId = currentUser.uid;

    return(dispatch) => {
        // dispatch({type: SAVE_NICKNAME});
        firebase.database().ref(`/users`)
            .push( {nickname, userId} )
            .then(() => {
                dispatch({ type : SAVE_NICKNAME});
            })
    }
};

export const fetchUseridWithNickname = () => {
    return(dispatch) => {
        firebase.database().ref(`/users`)
            .on('value', snapshot => {
                dispatch({type:FETCH_USERID_WITH_NICKNAME, payload: snapshot.val()});
            })
    }
};

export const loginUser = ({ email, password }) => {
    return (dispatch) => {
        dispatch({ type: LOGIN_USER});

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => loginUserSuccess(dispatch, user))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(user => loginUserSuccess(dispatch, user))
                    .catch(() => loginUsertFail(dispatch));
            });
    };
};

const loginUsertFail = (dispatch) => {
    dispatch({
        type: LOGIN_USER_FAIL
    })
};

const loginUserSuccess = (dispatch, user) => {
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    });

    Actions.main();
};