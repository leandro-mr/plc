var Kinvey = require('kinvey-node-sdk');

// Constructor
function KinveyClient() {
    console.log('[Sync] Initializing Kinvey');
    // Initialize Kinvey.
    Kinvey.initialize({
        appKey: 'kid_r1T7SvaHl',
        appSecret: '783c53634b9a4ab28f51f699bfc5ff5e'
    }).then(function(activeUser) {
        console.log('Initialization done');
        if (activeUser != null) {
            console.log('Active User:' +  activeUser);
        } else {
            console.log('No Active User');
        }
    }).catch(function(error) {
        console.log('Error: ' + error);
    });
}

KinveyClient.prototype.login = function(callback) {
    console.log('[Sync] Logging on Kinvey');
    Kinvey.User.login({
        username: 'Thor',
        password: '12345'
    }).then(function onSuccess(user) {
        console.log('User: ' + user._id);
        callback();
    })
}

// export the class
module.exports = KinveyClient;
