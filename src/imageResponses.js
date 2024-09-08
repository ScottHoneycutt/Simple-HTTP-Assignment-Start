const fs = require('fs');

const image = fs.readFileSync(`${__dirname}/../client/spongegar.png`);

// Called in server.js. Sends an image to the client. -SJH
const getSpongegar = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'image/png' });
  response.write(image);
  response.end();
};

module.exports.getSpongegar = getSpongegar;
