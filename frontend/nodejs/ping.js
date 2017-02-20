var util = require('util');
var Kinvey = require('kinvey-node-sdk');
var KinveyClient = require('./client');

function Ping() {
    KinveyClient.apply(this, arguments);
}

util.inherits(Ping, KinveyClient);

Ping.prototype.do = function() {
    Kinvey.ping().then(function(response) {
        console.log('Kinvey Ping Success. Kinvey Service is alive, version: ' + response.version + ', response: ' + response.kinvey);
    }).catch(function(error) {
        console.log('Kinvey Ping Failed. Response: ' + error);
    });
};

p = new Ping();
p.do();