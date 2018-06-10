import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { CardSection, Input } from "./common";
import { connect } from 'react-redux';
import { employeeUpdate } from "../actions";
import { Container, Header, Left, Body, Title, Right, Content, Textarea, Form, Button} from "native-base";

class EmployeeForm extends Component {
    render() {
        return (
            <View style={{height:300}}>
            <Container>
                <Content padder>
                    <Form>
                        <Textarea
                        rowSpan={3}
                        bordered
                        placeholder="ImageUrl"
                        value={this.props.imageUrl}
                        onChangeText={text=> this.props.employeeUpdate({ prop: 'imageUrl', value: text})}
                        />
                        <Textarea
                            rowSpan={5}
                            bordered
                            placeholder="Text"
                            value={this.props.text}
                            onChangeText={text=> this.props.employeeUpdate({ prop:'text', value: text})}
                        />
                        </Form>

                </Content>

            </Container>
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