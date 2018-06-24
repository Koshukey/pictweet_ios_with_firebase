import React, { Component } from 'react';
import { View } from 'react-native';
// import { CardSection, Input } from "./common";
import { connect } from 'react-redux';
import { Container, Header, Content, Item, Input, Button, Text } from 'native-base';

class ChatForm extends Component {
    render() {
        return (
            <View style={styles.formStyle}>
            <Container>
                <Content>
                    <Item style={styles.itemStyle} rounded>
                        <Input placeholder='put comment here'/>
                    </Item>
                    <Button
                        style={styles.buttonStyle}
                        primary>
                        <Text> Success </Text>
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