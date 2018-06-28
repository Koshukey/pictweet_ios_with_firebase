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

        // var commentsArray =[];
        var comments = [];
        var commentId ='';
        var comment = '';
        var commentNickname = '';
        firebase.database().ref(`/comments`)
            .on('value', snapshot => {
                snapshot.forEach(function (childSnapshot) {

                    const commentData = childSnapshot.val();

                    comment = commentData["comment"];
                     commentId = commentData['tweetId'];
                     commentNickname = commentData['savedUserNickname'];

                    if( tweetId === commentId) {

                        comments.push({ comment:comment, nickname: commentNickname});



                    }


                })
                this.setState({commentsState: comments});
            }).bind(this);


            };



    render() {

        const stateCommentArray = this.state.commentsState;


        const stateCommentArrayNew = [];

        for (var i=0; i<stateCommentArray.length;i++){


            stateCommentArrayNew.push(
                <Text>
                    {stateCommentArray[i]["nickname"] + ":" + stateCommentArray[i]["comment"]}
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
        height: 30,
        color: '#ffffff'
    }

}




export default ChatList;