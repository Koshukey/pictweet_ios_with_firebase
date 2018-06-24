import React, { Component } from 'react';
import { Card, CardSection, Button } from "./common";
import { connect } from 'react-redux';
import { Text, TouchableWithoutFeedback, View, Image, ImageBackground  } from 'react-native';
import ChatForm from './ChatForm';

const ShowDetail= (imageUrl, text, nickname) => {

    console.log(imageUrl)
    console.log(text)
    console.log(nickname)

        const { container, child, imageStyle, textStyle, nicknameStyle, detailButtonStyle } = styles;

        return(

        <View>
            <TouchableWithoutFeedback>
                <View　style={container}>
                    <ImageBackground style={imageStyle} source={{uri: imageUrl["data"] }}>

                        <Text style={textStyle}>xxd</Text>
                        <Text style={nicknameStyle}>aaaa</Text>

                    </ImageBackground>
                </View>
            </TouchableWithoutFeedback>
            <ChatForm/>
        </View>
        )

}


const styles = {

    container: {
        color: '#3E4242',
        marginTop: 20
    },

    child: {
        borderColor: '#CCC',
        borderWidth: 2,
        padding: 20,
        textAlign:   'center'
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    },
    textStyle: {
        zIndex: 2,
        fontFamily: 'HiraMinProN-W3',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10,
        color: '#ffffff',
        fontSize: 27
    },
    nicknameStyle: {
        zIndex: 2,
        fontFamily: 'HiraMinProN-W3',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10,
        color: '#ffffff',
        fontSize: 22,
        marginTop:230
    },
    detailButtonStyle: {
        height: 5
    }
};

export default ShowDetail;