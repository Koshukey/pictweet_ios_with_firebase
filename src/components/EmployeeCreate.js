import React, { Component } from 'react';
import { Card, CardSection, Button } from "./common";
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from "../actions";
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {
    onButtonPress() {
        const { imageUrl, text, shift } = this.props;
        this.props.employeeCreate({ imageUrl, text, shift: shift || 'Monday' });

    }
    render() {
        return (
          <Card>
              <EmployeeForm  {...this.props} />

              <CardSection>
                  <Button onPress={this.onButtonPress.bind(this)}>
                      Create
                  </Button>

              </CardSection>
          </Card>
        );
    }
}


const mapStateToProps = (state) => {
    const { imageUrl, text, shift } =  state.employeeForm;
    return { imageUrl, text, shift };
}

export default connect(mapStateToProps, {
    employeeUpdate, employeeCreate }) (EmployeeCreate);

