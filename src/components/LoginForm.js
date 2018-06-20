import React, { Component } from 'react';
import { Card, CardSection, Input, Button, Spinner } from './common';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, nicknameChanged, loginUser, saveNickname, fetchUseridWithNickname } from "../actions";
import { View, Text } from 'react-native';
import firebase from "firebase";



class LoginForm extends Component {



    onEmailChange(text) {
        this.props.emailChanged(text)
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text)
    }

    onNicknameChange(text) {
        this.props.nicknameChanged(text)
    }

    onButtonPress() {
        const { email, password, nickname } = this.props;

        this.props.loginUser({ email, password });

        // this.props.saveNickname({nickname });


    }

    renderButton() {
        if (this.props.loading) {
            return <Spinner size="large" />
        }

        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Login
            </Button>
        )
    }

    renderError() {
        if (this.props.error) {
            return (
                <View style={{backgroundColor: 'white'}}>
                    <Text style={styles.errorTextStyle}>
                        {this.props.error}
                    </Text>
                </View>
            )
        }
    }

    enrollNickname() {

        return (
            <CardSection>
                <Input
                    label="Nickname"
                    placeholder="put your nickname"
                    onChangeText={this.onNicknameChange.bind(this)}
                    value={this.props.nickname}
                />
            </CardSection>
        )
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        placeholder="emial@gmail"
                        //onChangeText is distinctive event hundler for react native
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        secureTextEntry
                        label="Password"
                        placeholder="password"
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                    />
                </CardSection>

                {/*{this.enrollNickname()}*/}

                {this.renderError()}

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
}

const mapStateToProps = ({ auth }) => {
    const { email, password, error, loading, nickname } = auth;

    return { email, password, error, loading, nickname };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, nicknameChanged, loginUser, saveNickname, fetchUseridWithNickname })(LoginForm);