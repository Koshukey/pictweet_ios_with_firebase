import React, { Component } from 'react';
import { View } from 'react-native';
// import { CardSection, Input } from "./common";
import { connect } from 'react-redux';
import { Container, Header, Content, Item, Input, Button, Text } from 'native-base';
import firebase from "firebase";

class ChatForm extends Component {


    state = {
        comment: '',
        shouldDisableButton: false
    };

    saveComment(comment) {
        const { tweetId, nickname} = this.props;

        const { currentUser } = firebase.auth();

        const userId = currentUser.uid;

        const firebaseUsersRef = firebase.database().ref(`/users`);

        const loginUserName = '';

        var savedUserId = '';

        var  savedUserNickname = '';

        firebaseUsersRef
            .on("value", function(snapshot) {

            snapshot.forEach(function (childSnapshot) {

                const childData = childSnapshot.val();
                 savedUserId = childData.userId;

                if( userId === savedUserId ) {
                     savedUserNickname = childData.nickname;
                }


            });

            console.log(savedUserNickname);

        });


        const firebaseRef = firebase.database().ref(`/comments`);

        firebaseRef.push( {tweetId, savedUserNickname, comment })
            .then(() => {});

        // this.setState({shouldDisableButton : true})

    }


    render() {
        console.log(this.state);

        console.log(this.props.tweetId)

        return (
            <View style={styles.formStyle}>
            <Container>
                <Content>
                    <Item style={styles.itemStyle} rounded>
                        <Input placeholder='put comment here'
                               onChangeText={(comment) => this.setState({comment})}
                        />
                    </Item>
                    <Button
                        style={styles.buttonStyle}
                        onPress={() => {this.saveComment(this.state.comment)}}
                        disabled={this.state.shouldDisableButton}
                        primary>
                        <Text> 送信 </Text>
                    </Button>
                </Content>
            </Container>
             </View>

        )
    }
}


const styles = {
    formStyle: {
        marginTop:350,
        height: 40,
        flex: 1
        // backgroundColor:'#ffffff'
    },
    itemStyle: {
        backgroundColor:'#ffffff',
        flex: 1,
        position:'absolute',
        paddingRight: 50
    },
    buttonStyle: {
        marginLeft: 250,
        height: 40,
        marginTop:7

    }
};


export default ChatForm;