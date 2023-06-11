// Require the Fastify framework and instantiate it
const fastify = require("fastify")();
// Handle GET verb for / route using Fastify
// Note use of "chain" dot notation syntax
fastify.get("/name", (request, reply) => {
  reply
    .code(200)
    .header("Content-Type", "text/html; charset=utf-8")
    .send("<h1>Hello, Guest</h1>");
});

fastify.get("/name?first=Taki&last=Alyasri", (request, reply) => {
  const { firstName, lastName } = request.params;
  reply
    .code(200)
    .header("Content-Type", "text/html; charset=utf-8")
    .send(`<h1>Name: ${firstName} ${lastName}</h1>`);
});
// Start server and listen to requests using Fastify
const listenIP = "localhost";
const listenPort = 8080;
fastify.listen(listenPort, listenIP, (err, address) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  console.log(`Server listening on ${address}`);
});
