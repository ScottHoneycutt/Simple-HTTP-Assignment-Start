const text = require('./textResponses.js');

// Uses the text module to create a "hello world" response in a json format -SJH
const getHelloJSON = (request, response) => {
  const helloJSON = {
    message: text.hello,
  };
  const stringMessage = JSON.stringify(helloJSON);

  response.writeHead(200, { 'Content-Type': 'text/json' });
  response.write(stringMessage);
  response.end();
};

// Uses the text module to create a timestamp response in a json format -SJH
const getTimeJSON = (request, response) => {
  const timeJSON = {
    message: text.getTimeString(),
  };
  const stringMessage = JSON.stringify(timeJSON);

  response.writeHead(200, { 'Content-Type': 'text/json' });
  response.write(stringMessage);
  response.end();
};

module.exports = {
  getHelloJSON,
  getTimeJSON,
};
