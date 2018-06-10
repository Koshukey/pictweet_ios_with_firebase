import {
    EMPLOYEE_UPDATE,
    EMPLOYEE_CREATE,
    EMPLOYEES_FETCH_SUCCESS,
    EMPLOYEE_SAVE_SUCCESS
} from './types';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

// This file are for Action Creator.

export const employeeUpdate = ({ prop, value }) => {
    return {
        type: EMPLOYEE_UPDATE,
        payload: { prop, value }
    };
};

export const employeeCreate = ({ imageUrl, text, shift }) => {
  const { currentUser } = firebase.auth();

  return(dispatch) => {
      firebase.database().ref(`/users/${currentUser.uid}/tweets`)
          .push({imageUrl, text, shift})
          .then(() => {
              dispatch({ type: EMPLOYEE_CREATE });
              Actions.pop({ type: 'reset' })
          });
  };
};

export const employeesFetch = () => {
    const { currentUser } = firebase.auth();

    return(dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/tweets`)
            .on('value', snapshot => {
                dispatch({type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val()});
            });
    };
};

export const employeeSave = ({ imageUrl, text, shift, uid }) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/tweets/${uid}`)
            .set({ imageUrl, text, shift })
            .then(() => {
                dispatch({ type: EMPLOYEE_SAVE_SUCCESS});
                Actions.employeeList({ type: 'reset' });
            });
    };
};

export const employeeDelete = ({ uid }) => {
    const { currentUser } = firebase.auth();

    return () => {
        firebase.database().ref(`/users/${currentUser.uid}/tweets/${uid}`)
            .remove()
            .then(() => {
                Actions.pop({ type: 'reset' });
            } );
    };
};