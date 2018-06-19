import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';
import Router from './Router';
import logger from 'redux-logger';


class App extends Component {

    componentWillMount() {

        var config = {
            apiKey: "AIzaSyAMPQIhFpcjaue5gnZKKx0Bm5TuSGX-0PE",
            authDomain: "pictweet-ios-with-firebase.firebaseapp.com",
            databaseURL: "https://pictweet-ios-with-firebase.firebaseio.com",
            projectId: "pictweet-ios-with-firebase",
            storageBucket: "pictweet-ios-with-firebase.appspot.com",
            messagingSenderId: "1059090544650"
        };
        firebase.initializeApp(config);
    }


    render() {

        const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

        const store = createStore(reducers, {}, composeEnhancers( applyMiddleware(ReduxThunk, logger)));

        console.log(store.getState());

        return (
            <Provider store={store}>
              <Router/>
            </Provider>
        );
    }
}

export default App;

