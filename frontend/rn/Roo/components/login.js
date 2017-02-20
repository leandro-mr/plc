/**
 * TBD
 * @flow
 */

import React, {Component} from 'react';
import {
    Text,
    View
} from 'react-native';

import SimpleKinvey from './../simple-kinvey-sdk/kinvey-client';

class Login extends Component {

    constructor() {
        super();

        this.state = {
            isLoading: true
        };

        var time = new Date().getTime();

        console.log("call login at" + time);
        var kc = new SimpleKinvey();
        kc.login("thor", "12345");

        console.log("async login done at" + time);

    }

    /*
    .then(response => response.token)   // Successfully logged in
.then(token => saveToken(token))    // Remember your credentials
.catch(err => alert(err.message));  // Catch any error
    */

    render() {
        if (this.state.isLoading) {
            return (
                <View>
                    <Text>Fetching from BaaS, please wait...</Text>
                </View>
            );
        } else {
            return (
                <View>
                    <Text>Successfully call to REST api</Text>
                </View>
            );
        }
    }
}

// <Text>Successfully fetched {this.places.length} models from REST api</Text>
export default Login;
