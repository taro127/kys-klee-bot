const http = require("http");
//create a server object:
http
  .createServer(function (req, res) {
    res.write("<h1>Hello World!</h1>"); //write a response to the client
    res.end(); //end the response
  })
  .listen(034235);
//Server runs on localhost:8080

// Include the server in your file
const server = require("server");
const { get, post } = server.router;

// Handle requests to the url "/" ( http://localhost:3000/ )
server([get("/", (ctx) => "Hello world!")]);
