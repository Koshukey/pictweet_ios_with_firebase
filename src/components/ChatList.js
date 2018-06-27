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

        const stateCommentArray = this.state.commentsState;

        // console.log(stateCommentArray);
        //
        // for (var i=0; i<stateCommentArray.length;i++){
        //
        //     console.log(stateCommentArray[i])
        // }
const stateCommentArrayNew = [];

        for (var i=0; i<stateCommentArray.length;i++){

            // console.log("fuck")

            stateCommentArrayNew.push(
                <Text>
                    {stateCommentArray[i]}
                </Text>
            );
        }
　　　　
        console.log(stateCommentArrayNew);


    return(

        <View style={styles.containerStyle}>


            {stateCommentArrayNew}

        </View>
        )
    }

}

const styles = {
    containerStyle: {
        height: 200,
        color: '#ffffff'
    }

}




export default ChatList;