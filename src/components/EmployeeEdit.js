import React, { Component } from 'react';
import { connect } from 'react-redux';
import EmployeeForm from './EmployeeForm';
import { Card, CardSection, Button, Confirm } from "./common";
import { employeeUpdate, employeeSave, employeeDelete } from "../actions";
import _ from 'lodash';
import Communications from 'react-native-communications';
// import firebase from "firebase/index";
import firebase from "firebase";

class EmployeeEdit extends Component {

    state = {showModal: false};

    componentWillMount() {
        _.each(this.props.employee, (value, prop) => {
            this.props.employeeUpdate({prop, value});
        });
    }

    onButtonPress() {
        const {imageUrl, text} = this.props;

        this.props.employeeSave({imageUrl, text, uid: this.props.employee.uid});
    }


    onAccept() {
        const {uid} = this.props.employee;
        this.props.employeeDelete({uid});
    }

    onDecline() {
        this.setState({showModal: false});

    }

    renderDeleteButton() {

        const {employee} = this.props;

        const {currentUser} = firebase.auth();

        if (currentUser.uid === employee["userId"]) {
            return (

                <Card>
                    <CardSection>
                        <Button onPress={this.onButtonPress.bind(this)}>
                            Save Changes
                        </Button>
                    </CardSection>

                    <CardSection>
                        <Button onPress={() => this.setState({showModal: !this.state.showModal})}>
                            Delete
                        </Button>
                    </CardSection>

                    <Confirm
                        visible={this.state.showModal}
                        onAccept={this.onAccept.bind(this)}
                        onDecline={this.onDecline.bind(this)}
                    >
                        Are U sure U wanna delete this?
                    </Confirm>
                </Card>
            );

        } else {
            return null;
        }
    }


    render() {

        return (

            <Card>
                <EmployeeForm/>
                {this.renderDeleteButton()}
            </Card>

        );
    };
}

const mapStateToProps = (state) => {
    const { imageUrl, text } = state.employeeForm;

    return { imageUrl, text };

};

export default connect(mapStateToProps, {
    employeeUpdate, employeeSave, employeeDelete
}) (EmployeeEdit);