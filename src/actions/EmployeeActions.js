import {
    EMPLOYEE_UPDATE,
    EMPLOYEE_CREATE,
    EMPLOYEES_FETCH_SUCCESS,
    EMPLOYEE_SAVE_SUCCESS,
    COMMENTS_FETCH_SUCCESS
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

export const employeeCreate = ({ imageUrl, text }) => {
  const { currentUser } = firebase.auth();


  const userId = currentUser.uid;

    const userDataRef = firebase.database().ref(`/users`);

    const tweetDataRef = firebase.database().ref(`/tweets`);

    var nickname = '';


  const tweetId = Math.round(Math.random() * 1000);

    userDataRef.orderByChild(`userId`).equalTo(userId).on("value", function(snapshot) {

        snapshot.forEach(function(child) {

            const fetchednickname = child.val()["nickname"];

            nickname = fetchednickname
        });

    });

  return(dispatch) => {

      firebase.database().ref(`/tweets`)

          .push({imageUrl, text, userId, tweetId, nickname })
          .then(() => {
              dispatch({ type: EMPLOYEE_CREATE });
              Actions.pop({ type: 'reset' })
          });
  };
};

export const employeesFetch = () => {
    const { currentUser } = firebase.auth();

    return(dispatch) => {
        firebase.database().ref(`/tweets`)
            .on('value', snapshot => {
                dispatch({type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val()});
            });
    };
};

export const commentsFetch = () => {
    return(dispatch) => {
        firebase.database().ref(`/comments`)
            .on('value', snapshot => {
                dispatch({type: COMMENTS_FETCH_SUCCESS, payload: snapshot.val()});
            });
    };

}

export const employeeSave = ({ imageUrl, text, uid }) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        // firebase.database().ref(`/users/${currentUser.uid}/tweets/${uid}`)
        firebase.database().ref(`/tweets/${uid}`)

            .set({ imageUrl, text })
            .then(() => {
                dispatch({ type: EMPLOYEE_SAVE_SUCCESS});
                Actions.pop({ type: 'reset' });
            });
    };
};

export const employeeDelete = ({ uid }) => {
    const { currentUser } = firebase.auth();

    return () => {
        firebase.database().ref(`/tweets/${uid}`)
        // firebase.database().ref(`/users/${currentUser.uid}/tweets/${uid}`)

            .remove()
            .then(() => {
                Actions.pop({ type: 'reset' });
            } );
    };
};