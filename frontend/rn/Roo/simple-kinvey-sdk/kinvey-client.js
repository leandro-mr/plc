/**
 * TBD
 * @flow
 */

export default class SimpleKinvey {

  /*
  CitiesClient.prototype.load = function() {
      this.login( function(err) {
          if (err) throw err;
          var dataStore = Kinvey.DataStore.collection('cities', Kinvey.DataStoreType.Sync);
          // Pull data from the backend and save it to the cache.
          dataStore.pull().then(function onSuccess(entities) {
              console.log('Entities: ' + entities);
          }).catch(function onError(error) {
              console.log('Error: ' + error);
          });
      });
  };

  c = new CitiesClient();
  c.load();

  */

  /*
    HTTP Request

      POST /user/:appKey/login HTTP/1.1
      Content-Type: application/json
      X-Kinvey-Api-Version: 1
      Authorization: [Basic Auth with app credentials]

      {
        "username": "ivan",
        "password": "123456"
      }

    HTTP Response

      HTTP/1.1 200 OK
      X-Kinvey-Api-Version: 1
      Content-Type: application/json

      {
        "username": "ivan",
        "location": "Cambridge, MA, USA",
        "locale": "en-US",
        "_kmd":
        {
          "lmt":"2012-06-29T13:02:11.864Z",
          "authtoken":"368c9f15-01b4-4a49-9b8d-989f4b2d30ed.Vai/mloxDgUUiSwiRkA9kDvoBu5NvlZaEkGXrREY8G9="
        }
      }
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
          console.log("[A] Ok");
          return response.json();
        } else {
          reject(response)
        }
      })
      .then(function(responseJson) {
        console.log("[A] Digesting response");
        resolve(responseJson.username)
      })
      .catch(function(error) {
        console.log("[A] Something got wrong");
        console.error(error);
      });
      console.log("login completed");
    })
  }
};
