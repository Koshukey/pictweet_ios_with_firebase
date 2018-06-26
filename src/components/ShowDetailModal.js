import React, { Component } from 'react';
import Modal from "react-native-modal";
import { Text, TouchableWithoutFeedback, View,
    Image, ImageBackground, TouchableOpacity  } from 'react-native';




class ShowDetailModal extends Component {




    render() {



        const { tweetId, nickname, imageUrl, text } = this.props;
        const { container, child, imageStyle, textStyle, nicknameStyle, detailButtonStyle } = styles;

console.log(imageUrl);
        console.log(this.props)
        return(
            <View>
            <Modal isVisible={this.props.isModalVisible}>
                <TouchableWithoutFeedback>
                    <View　style={container}>
                        {/*<ImageBackground style={imageStyle} source={{uri: imageUrl }}>*/}

                            {/*<Text style={textStyle}>{text}</Text>*/}
                            {/*<Text style={nicknameStyle}>{nickname}</Text>*/}

                        {/*</ImageBackground>*/}
                        <Image style={imageStyle} source={{uri: imageUrl}}>
                        </Image>
                    </View>
                </TouchableWithoutFeedback>
                <View style={styles.modalContent}>
                    <Text style={textStyle}>{text}</Text>
                    <Text style={nicknameStyle}>{nickname}</Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.props._toggleModal}
                >
                    <Text>push</Text>
                </TouchableOpacity>
                </View>
            </Modal>
            </View>

        )
    }

}

const styles = {
    modalContent: {
        backgroundColor: "white",
        padding: 22,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 4,
        borderColor: "rgba(0, 0, 0, 0.1)",
        height: 530
    },
    button: {
        backgroundColor: "lightblue",
        padding: 12,
        margin: 16,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 4,
        borderColor: "rgba(0, 0, 0, 0.1)"
    },
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
        // color: '#ffffff',
        color: '#000000',

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

};

export default ShowDetailModal;