/**
 * Landpage
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

//import Login from './components/login';

import SimpleKinvey from './simple-kinvey-sdk/kinvey-client';

export default class Roo extends Component {

  render() {
    console.log("Calling login...");
    var simpleKinvey = new SimpleKinvey();
    simpleKinvey.login()
    .then(function(response) {
      console.log("[A] Ok");
      console.log("[A] username = " + response);
    })
    .catch(function(error) {
      console.log("[A] ERROR");
      console.error(error);
    });
    console.log("Logging on has been called...");

    return (

      <View style={styles.container}>
        <Text style={styles.welcome}>
          Hello, eeeeeeeeeeeeeeeee!!!!!!!!!!!!
        </Text>
      </View>

    );
  }
}

// REMOVED
//        <Login/>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Roo', () => Roo);
