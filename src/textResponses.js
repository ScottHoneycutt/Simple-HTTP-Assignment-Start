const hello = 'Hello world';

// Returns the current time -SJH
const getTimeString = () => {
  const d = new Date();
  const dateString = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
  return dateString;
};

// Called in serve.js. Sends the current time in plain text as a response. -SJH
const getTime = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.write(getTimeString());
  response.end();
};

// Called in serve.js. Sends a greeting in plain text as a response. -SJH
const getHello = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.write(hello);
  response.end();
};

module.exports = {
  hello,
  getTimeString,
  getHello,
  getTime,
};
