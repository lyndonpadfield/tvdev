// Add this to the VERY top of the first file loaded in your app
var apm = require('elastic-apm-node').start({

    // Set required app name (allowed characters: a-z, A-Z, 0-9, -, _, and space)
        appName: 'user-training-mongo',
        // Use if APM Server requires a token
        secretToken: '',
        // Set custom APM Server URL (default: http://localhost:8200)
        serverUrl: '192.168.2.10:8200'
    })

    