var Hapi = require('hapi');

var server = new Hapi.Server();

server.connection({ port: 3000 });

server.ext('onRequest', function(request, reply) {
    console.log('Request received: ' + request.path);
    reply.continue();
});

server.route({
    path: '/',
    method: 'GET',
    handler: {
        file: 'templates/index.html'
    }
});


server.start(function() {
    console.log('Listening on ' + server.info.uri);
});


