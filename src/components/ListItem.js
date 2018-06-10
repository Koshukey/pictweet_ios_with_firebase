import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View, Image  } from 'react-native';
// import { CardSection } from "./common";
import { Actions } from 'react-native-router-flux';

class ListItem extends Component {

    onRowPress() {
        Actions.employeeEdit({ employee: this.props.employee });
    }

    render() {
        const { imageUrl } = this.props.employee;

        const { container, child, imageStyle } = styles;

        return (
            <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
                <View　style={container}>

                    <Image style={imageStyle} source={{uri: imageUrl }}>

                    </Image>

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
    }
}

export default ListItem;