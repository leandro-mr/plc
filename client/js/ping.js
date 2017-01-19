var Kinvey = require('kinvey-node-sdk');

// http://devcenter.kinvey.com/nodejs/reference/api/class/src/client.js~Client.html
Kinvey.initialize({
    appKey: 'kid_r1T7SvaHl',
    appSecret: '783c53634b9a4ab28f51f699bfc5ff5e'
}).then(function(activeUser) {
    console.log('activeUser: ' + activeUser);
}).catch(function(error) {
    console.log('Error: ' + error);
});


var promise = Kinvey.ping().then(function(response) {
    console.log('Kinvey Ping Success. Kinvey Service is alive, version: ' + response.version + ', response: ' + response.kinvey);
}).catch(function(error) {
    console.log('Kinvey Ping Failed. Response: ' + error);
});