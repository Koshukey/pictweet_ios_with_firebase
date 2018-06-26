import React, { Component } from 'react';
import { View } from 'react-native';
// import { CardSection, Input } from "./common";
import { connect } from 'react-redux';
import { Container, Header, Content, Item, Input, Button, Text } from 'native-base';

class ChatForm extends Component {


    state = {
        comment: ''
    };

    saveComment() {

    }


    render() {
        console.log(this.state);

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
        marginTop:420,
        height: 300,
        // flex: 1
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