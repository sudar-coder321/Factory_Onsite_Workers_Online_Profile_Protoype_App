const express = require('express'); //express JS frontend framework

const morgan = require('morgan'); ///morgan is a http request logger(stores and manages request and response event logs)

const path = require('path');

//initialize express.
const app = express();

// Initialize variables.
const port = 3000; // process.env.PORT || 3000;

// Configure morgan module to log all requests.
app.use(morgan('dev')); 

// Set the front-end folder to serve public assets.
app.use(express.static('JavaScriptSPA')) //SPA-single page application

//instead of sending a message to the server we send an entire html page itself  
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html')); 
});

// Start the server.
app.listen(port);
console.log('Listening on port ' + port + '...\n');
console.log(`Visit http://localhost:${port}/`);
