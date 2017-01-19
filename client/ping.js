var Kinvey = require('kinvey-node-sdk');

Kinvey.initialize({
    appKey: 'kid_r1T7SvaHl',
    appSecret: '783c53634b9a4ab28f51f699bfc5ff5e'
}).then(function(activeUser) {
    // ...
}).catch(function(error) {
    // ...
})


var promise = Kinvey.ping().then(function(response) {
    console.log('Kinvey Ping Success. Kinvey Service is alive, version: ' + response.version + ', response: ' + response.kinvey);
}).catch(function(error) {
    console.log('Kinvey Ping Failed. Response: ' + error.description);
});