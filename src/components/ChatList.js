import React, { Component } from 'react';
import firebase from 'firebase';
import { ListView, Text, TouchableOpacity, View, TextInput } from 'react-native';

import ChatListItem from './ChatListItem';
import {EMPLOYEES_FETCH_SUCCESS} from "../actions/types";

class ChatList extends Component {

   state = {
       commentsState:''
   }



    componentWillMount() {
        var commentsArray =[];
        var comments = [];
        firebase.database().ref(`/comments`)
            .on('value', snapshot => {
                snapshot.forEach(function (childSnapshot) {

                    const commentData = childSnapshot.val();

                    var comment = commentData["comment"];
                    commentsArray.push(commentData);
                    comments.push(comment);

                })
                this.setState({commentsState: comments});
            }).bind(this);


            };



    render() {
        console.log(this.state.commentsState);

        // this.state.commentsState.map(function (value) {
        //     console.log(value);
        // })
        //

        const stateCommentArray = this.state.commentsState;

    return(

        <View>

            {/*{*/}
                {/*stateCommentArray.map(function (comment) {*/}


                    {/*return <Text>{comment}</Text>*/}
                {/*})*/}

            {/*}*/}

        </View>
        )
    }

}




export default ChatList;