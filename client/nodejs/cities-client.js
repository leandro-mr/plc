var util = require('util');
var Kinvey = require('kinvey-node-sdk');
var KinveyClient = require('./client');

function CitiesClient() {
    KinveyClient.apply(this, arguments);
}

util.inherits(CitiesClient, KinveyClient);

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
