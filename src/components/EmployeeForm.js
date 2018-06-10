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

                <CardSection style={{ flexDirection: 'column' }}>
                    <Text style={styles.pickerTextStyle}>Shift</Text>
                    <Picker
                        // style={{ flex: 1 }}
                        selectedValue={this.props.shift}
                        onValueChange={day => this.props.employeeUpdate({ prop:'shift', value: day})}
                    >
                        <Picker.Item label="Monday" value="Monday" />
                        <Picker.Item label="Tuesday" value="Tuesday" />
                        <Picker.Item label="Wednesday" value="Wednesday" />
                        <Picker.Item label="Thursday" value="Thursday" />
                        <Picker.Item label="Friday" value="Friday" />
                        <Picker.Item label="Saturday" value="Saturday" />
                        <Picker.Item label="Sunday" value="Sunday" />
                    </Picker>
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
    const { imageUrl, text, shift } = state.employeeForm;
    return { imageUrl, text, shift };
};


export default connect(mapStateToProps, {employeeUpdate})(EmployeeForm);