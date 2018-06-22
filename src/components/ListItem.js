import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View, Image, ImageBackground  } from 'react-native';
// import { CardSection } from "./common";
import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';

class ListItem extends Component {


    onRowPress() {
        Actions.employeeEdit({ employee: this.props.employee });
    }


    render() {


        const { imageUrl, text, nickname } = this.props.employee;

        console.log(this.props.employee);
        console.log(this.props);

        const { container, child, imageStyle, textStyle, nicknameStyle } = styles;

        return (
            <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
                <View　style={container}>

                    <ImageBackground style={imageStyle} source={{uri: imageUrl }}>
                        <Text style={textStyle}>{ text }</Text>
                        <Text style={nicknameStyle}>{ nickname }</Text>

                    </ImageBackground>

                </View>
            </TouchableWithoutFeedback>
        );
    }
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
    }
}

export default ListItem;