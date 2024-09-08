const http = require('http');
const htmlHandler = require('./htmlResponses.js');
const textHandler = require('./textResponses.js');
const jsonHandler = require('./jsonResponses.js');
const imgHandler = require('./imageResponses.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

// Define what to do when this server recieves a request (what response it sends).
// This code executes on the server, response is sent to the client. -SJH
const onRequest = (request, response) => {
  if (request.url === '/page2') {
    htmlHandler.getPage2(request, response);
  } else if (request.url === '/hello') {
    textHandler.getHello(request, response);
  } else if (request.url === '/time') {
    textHandler.getTime(request, response);
  } else if (request.url === '/helloJSON') {
    jsonHandler.getHelloJSON(request, response);
  } else if (request.url === '/timeJSON') {
    jsonHandler.getTimeJSON(request, response);
  } else if (request.url === '/dankmemes') {
    imgHandler.getSpongegar(request, response);
  } else {
    htmlHandler.getIndex(request, response);
  }
};

// Create web server, give it a function to handle requests, and tell it what port to
// start listening on -SJH
http.createServer(onRequest).listen(port);
