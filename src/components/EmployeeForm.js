import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { CardSection, Input } from "./common";
import { connect } from 'react-redux';
import { employeeUpdate } from "../actions";

class EmployeeForm extends Component {
    render() {
        return (
            <View>

                <CardSection>
                    <Input
                        label="Image"
                        placeholder="tom"
                        value={this.props.imageUrl}
                        onChangeText={text=> this.props.employeeUpdate({ prop: 'imageUrl', value: text})}
                    />

                </CardSection>

                <CardSection>
                    <Input
                        label="Text"
                        placeholder="111111"
                        value={this.props.text}
                        onChangeText={text=> this.props.employeeUpdate({ prop:'text', value: text})}
                    />
                </CardSection>




            </View>
        )

    }
}



const styles = {
    pickerTextStyle: {
        fontSize: 18,
        paddingLeft: 20
    }
};

const mapStateToProps = (state) => {
    const { imageUrl, text } = state.employeeForm;
    return { imageUrl, text };
};


export default connect(mapStateToProps, {employeeUpdate})(EmployeeForm);