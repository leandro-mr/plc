/**
 * Simple Kinvey Client
 * @flow
 */

export default class KinveyClient {

  /*
    Login a user on Kinvey BaaS
  */
  login () {
    return new Promise((resolve, reject) => {
      console.log("login started");

      // [Kinvey] App credentials are used to bootstrap an app by authenticating the request that creates the user.
      var appKey = "kid_r1T7SvaHl";
      var appSecret = "783c53634b9a4ab28f51f699bfc5ff5e";
      var appCredentials = btoa(appKey + ":" + appSecret);
      var basicCredentials = "Basic" + " " + appCredentials;
      console.log("basic auth = " + basicCredentials);

      // [Web APIs] https://developer.mozilla.org/en-US/docs/Web/API/Headers
      var headers = new Headers({
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": basicCredentials
      });

      var username = "Thor";
      var password = "12345";

      // [Kinvey] User credentials are what authenticate all communication between the mobile app and Kinvey.
      var userCredentials = {
        "username": username,
        "password": password,
      };

      var body = JSON.stringify(userCredentials)
      console.log("body = " + body);

      // [Web APIs] https://developer.mozilla.org/en-US/docs/Web/API/Request/Request
      var init = {
        method: 'POST',
        headers: headers,
        body: body
      };

      // MUST be HTTPS
      // https://baas.kinvey.com/user/kid_r1T7SvaHl/login
      url = "https://baas.kinvey.com" + "/user/" + appKey + "/login"

      console.log("url = " + url);
      var loginRequest = new Request(url, init);

      console.log("Fetching data...");
      // Fetch
      fetch(loginRequest)
      .then(function(response) {
        console.log("[A] Checking response");
        if(response.ok) {
          console.log("[A] Success");
          return response.json();
        } else {
          reject(response)
        }
      })
      .then(function(responseJson) {
        console.log("[A] Response = " + JSON.stringify(responseJson));
        resolve(responseJson._kmd.authtoken)
      })
      .catch(function(error) {
        console.log("[A] Something got wrong!");
        console.error(error);
      });
      console.log("login completed");
    })
  }

  /*
    Returns a list of points of interest
  */
  getPointsOfInterest (authToken, city) {
    return new Promise((resolve, reject) => {
      console.log("getPointsOfInterest started");

      // [Kinvey] App credentials are used to bootstrap an app by authenticating the request that creates the user.
      // App credentials + Session Auth
      var appKey = "kid_r1T7SvaHl";
      var sessionAuth = "Kinvey" + " " + authToken;
      console.log("session auth = " + sessionAuth);

      // [Web APIs] https://developer.mozilla.org/en-US/docs/Web/API/Headers
      var headers = new Headers({
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": sessionAuth
      });

      // [Web APIs] https://developer.mozilla.org/en-US/docs/Web/API/Request/Request
      var init = {
        method: 'GET',
        headers: headers,
      };

      query = "?query={\"city.name\":\"" + city + "\"}"

      // MUST be HTTPS
      // https://baas.kinvey.com/appdata/kid_r1T7SvaHl/pois
      url = "https://baas.kinvey.com" + "/appdata/" + appKey + "/pois" + query

      // ?query={"author.firstName":"Terry"}

      console.log("url = " + url);
      var loginRequest = new Request(url, init);

      console.log("Fetching data...");
      // Fetch
      fetch(loginRequest)
      .then(function(response) {
        console.log("[A] Checking response");
        if(response.ok) {
          console.log("[A] Success");
          return response.json();
        } else {
          reject(response)
        }
      })
      .then(function(responseJson) {
        console.log("[A] Response = " + JSON.stringify(responseJson));
        resolve(responseJson)
      })
      .catch(function(error) {
        console.log("[A] Something got wrong!");
        console.error(error);
      });
      console.log("login completed");
    })
  }

};
