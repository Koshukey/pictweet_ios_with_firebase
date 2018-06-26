import React, { Component } from 'react';
import Modal from "react-native-modal";
import { ListView, Text, TouchableOpacity, View, TextInput } from 'react-native';



class ShowDetailModal extends Component {
    render() {
        return(
            <Modal isVisible={this.props.isModalVisible}>
                <Text>
                    Hello world
                </Text>

            </Modal>
        )
    }

}

const styles = {

};

export default ShowDetailModal;