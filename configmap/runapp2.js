var http = require('http');
const apiKey = process.env.API_KEY; 

if (!apiKey) {
  console.log('API_KEY is not set in the environment variables.'); 

  http.createServer(function (req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end("API_KEY is not set in the environment variables." + " \n");
  }).listen(8000);
} else {
  console.log('API_KEY:', apiKey);

  http.createServer(function (req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end("Welcome to fastcampus Kubernetes~! by kevin." + " \n");
  }).listen(8000);
}
