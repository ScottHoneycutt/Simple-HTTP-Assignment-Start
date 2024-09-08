const fs = require('fs');

const index = fs.readFileSync(`${__dirname}/../client/client.html`);
const page2 = fs.readFileSync(`${__dirname}/../client/client2.html`);

// Called in server.js. Sends one of the above html files (index) as a response. -SJH
const getIndex = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(index);
  response.end();
};

// Called in server.js. Sends one of the above html files (page2) as a response. -SJH
const getPage2 = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(page2);
  response.end();
};

// Exporting -SJH
module.exports.getIndex = getIndex;
module.exports.getPage2 = getPage2;
