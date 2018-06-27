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
       const { tweetId, nickname } = this.props;

        var commentsArray =[];
        var comments = [];
        var commentId ='';
        var comment = '';
        firebase.database().ref(`/comments`)
            .on('value', snapshot => {
                snapshot.forEach(function (childSnapshot) {

                    const commentData = childSnapshot.val();

                    comment = commentData["comment"];
                     commentId = commentData['tweetId'];
                    commentsArray.push(commentData);

                    if( tweetId === commentId) {

                        comments.push(comment);
                        console.log(comment)

                    }
                    console.log(tweetId)
                    console.log(commentId)
                    console.log(comments)

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