import React, { Component } from 'react';
import { ListView, Text, TouchableOpacity, View, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { employeesFetch } from "../actions";
import ListItem from './ListItem';
import _ from 'lodash';
import Modal from "react-native-modal";
import firebase from "firebase";
import { CardSection, Input, Button } from './common';


class EmployeeList extends Component {



    state = {
        isModalVisible: false,
        nickname: ''
    };


    saveNickname(nickname) {

        console.log("am I called ? smack bitch");

        const { currentUser } = firebase.auth();

        const userId = currentUser.uid;

        const firebaseRef = firebase.database().ref(`/users`);

        firebaseRef.push( {nickname, userId} )
            .then(() => {});

        this._toggleModal()

    }

    checkNickname(){

        //nicknameがまだ登録されていなかった場合、登録フォームを見せる


        const { currentUser } = firebase.auth();
        const loginUserId = currentUser.uid;

        const firebaseRef = firebase.database().ref(`/users`);

         var countNumber = 0;


        firebaseRef

            .on("value", function(snapshot) {

                var self = this;

                snapshot.forEach(function (childSnapshot) {

                    const childData = childSnapshot.val();
                    const savedUserId = childData.userId;

                    if (loginUserId === savedUserId ){
                        countNumber += 1
                    }

                });

                if (countNumber === 0){
                    self.setState({ isModalVisible: true });
                }

            }.bind(this));

    }


    _toggleModal() {
        this.setState({isModalVisible: !this.state.isModalVisible})
    };


    componentWillMount() {

        this.checkNickname();

        this.props.employeesFetch();

        this.createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps) {
        this.createDataSource(nextProps);
    }


    createDataSource({ employees }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(employees);
    }


    renderRow(employee) {
        return <ListItem employee={employee} />
    }

    render() {
        console.log(this.props);

        console.log(this.state.isModalVisible);
        return (
            <View>
                <Modal isVisible={this.state.isModalVisible}>
                    <View style={styles.modalContent}>
                        <Text>
                            Please register your nickname!
                        </Text>
                        <CardSection>
                            <View style={styles.containerStyle}>
                                <Text style={styles.labelStyle}>Nickname</Text>
                                <TextInput
                                    placeholder="put your nickname"
                                    autoCorrect={false}
                                    style={styles.inputStyle}
                                    value={this.state.nickname}
                                    onChangeText={(nickname) => this.setState({nickname})}
                                />
                            </View>
                        </CardSection>
                        <TouchableOpacity>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => this.saveNickname(this.state.nickname)}
                            >
                                <Text>register</Text>
                            </TouchableOpacity>
                        </TouchableOpacity>
                    </View>
                </Modal>
            <ListView
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this.renderRow}
                ref={ ( ref ) => this.scrollView = ref }
                onContentSizeChange={ () => {
                    this.scrollView.scrollToEnd( { animated: false } )
                } }
            />
            </View>
        );

    }
};

const styles = {
    modalContent: {
        backgroundColor: "white",
        padding: 22,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 4,
        borderColor: "rgba(0, 0, 0, 0.1)",
        height: 300
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
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2
    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }

};


const mapStateToProps = state => {
    const employees = _.map(state.employees, (val, uid) => {
        return {...val, uid };
    });

    return { employees };

};

export default connect(mapStateToProps, { employeesFetch }) (EmployeeList);

