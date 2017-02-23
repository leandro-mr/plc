/**
 * PoIs Button
 * @flow
 */

import React, {Component} from 'react';
import {
    Button
} from 'react-native';

import KinveyClient from './../simple-kinvey-sdk/kinvey-client';

class PoIButton extends Component {
  _onPressButton() {
    var city = "Oslo";
    var kinveyClient = new KinveyClient();
    console.log("Calling login...");
    kinveyClient.login()
    .then(function(authToken) {
      console.log("[A] authToken = " + authToken);
      kinveyClient.getPointsOfInterest(authToken,city)
      .then(function(pois) {
        for (var i = 0; i < pois.length; i++) {
          console.log("[A] Point of Interest = " + pois[i].name);
        }
      })
      .catch(function(error) {
        console.log("[A] Something got wrong getting PoIs!");
        console.error(error);
      });
    })
    .catch(function(error) {
      console.log("[A] Something got wrong logging on!");
      console.error(error);
    });
    console.log("Logging on has been called...");
  }

  render() {
    return (
      <Button
        onPress={this._onPressButton}
        title="List Points of Interest"
        color="#4286f4"
      />
    );
  }
}

export default PoIButton;
