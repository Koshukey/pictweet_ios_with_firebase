import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View, Image, ImageBackground  } from 'react-native';
// import { CardSection } from "./common";
import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';
import AwesomeButtonRick from 'react-native-really-awesome-button';

class ListItem extends Component {


    onRowPress() {
        Actions.employeeEdit({ employee: this.props.employee });
    }


    onDetailButtonPress() {
        Actions.showDetail();

    }


    render() {


        const { imageUrl, text, nickname } = this.props.employee;

        console.log(this.props.employee);
        console.log(this.props);

        const { container, child, imageStyle, textStyle, nicknameStyle, detailButtonStyle } = styles;

        return (
            <View>
            <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
                <View　style={container}>

                    <ImageBackground style={imageStyle} source={{uri: imageUrl }}>
                        <Text style={textStyle}>{ text }</Text>
                        <Text style={nicknameStyle}>{ nickname }</Text>

                    </ImageBackground>

                </View>
            </TouchableWithoutFeedback>
            <AwesomeButtonRick
                size="small"
                type="primary"
                width={380}
                textColor="#FFFFFF"
                height={40}
                backgroundColor="#1E90FF"
                onPress={this.onDetailButtonPress.bind(this)}
            >show detail</AwesomeButtonRick>
            </View>
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
    },
    detailButtonStyle: {
        height: 5
    }
};

export default ListItem;