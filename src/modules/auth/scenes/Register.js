import React, { Component } from 'react';
import { View, Text, ScrollView, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
import { clearForm, inputUpdate, register } from '../actions';
import NavigationService from '../../../core/navigation/NavigationService';
import { TextField, Button, Spinner } from '../../components';
import styles from '../styles';

class RegisterScreen extends Component {
  componentWillMount() {
    this.props.clearForm();
  }

  onButtonPress() {
    const { firstName, lastName, year, email, role, password, confirmPassword } = this.props;
    this.props.register({
      firstName,
      lastName,
      year,
      email,
      role,
      password,
      confirmPassword
    });
  }

  renderError() {
    if (this.props.error) {
      return (
        <View style={{ backgroundColor: 'white' }}>
          <Text style={styles.errorTextStyle}>{this.props.error}</Text>
        </View>
      );
    }
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }
    return <Button onPress={this.onButtonPress.bind(this)}>Register</Button>;
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <ScrollView style={{ flex: 1 }}>
          <TextField
            placeholder="First Name"
            autoCapitalize="words"
            style={styles.input}
            onChangeText={value => this.props.inputUpdate({ prop: 'firstName', value })}
            value={this.props.firstName}
          />
          <TextField
            placeholder="Last Name"
            autoCapitalize="words"
            style={styles.input}
            onChangeText={value => this.props.inputUpdate({ prop: 'lastName', value })}
            value={this.props.lastName}
          />
          <TextField
            placeholder="Year"
            autoCapitalize="none"
            style={styles.input}
            onChangeText={value => this.props.inputUpdate({ prop: 'year', value })}
            value={this.props.year}
          />
          <TextField
            placeholder="Email"
            autoCapitalize="none"
            style={styles.input}
            onChangeText={value => this.props.inputUpdate({ prop: 'email', value })}
            value={this.props.email}
          />
          <TextField
            placeholder="Role"
            autoCapitalize="none"
            style={styles.input}
            onChangeText={value => this.props.inputUpdate({ prop: 'role', value })}
            value={this.props.role}
          />
          <TextField
            secureTextEntry
            placeholder="Password"
            style={styles.input}
            onChangeText={value => this.props.inputUpdate({ prop: 'password', value })}
            value={this.props.password}
          />
          <TextField
            secureTextEntry
            placeholder="Confirm Password"
            style={styles.input}
            onChangeText={value => this.props.inputUpdate({ prop: 'confirmPassword', value })}
            value={this.props.confirmPassword}
          />
          {this.renderError()}
          {this.renderButton()}
          <View style={{ height: 60 }} />
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

const mapStateToProps = state => {
  const {
    firstName,
    lastName,
    year,
    email,
    role,
    password,
    confirmPassword,
    error,
    loading,
    user
  } = state.authReducer;
  return {
    firstName,
    lastName,
    year,
    email,
    role,
    password,
    confirmPassword,
    error,
    loading,
    user
  };
};

export default connect(
  mapStateToProps,
  {
    clearForm,
    inputUpdate,
    register
  }
)(RegisterScreen);