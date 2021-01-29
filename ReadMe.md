# Tsoa issue: Throwing TsoaResponse conflicts with 404 handler

Code that throws `TsoaResponse`: [link](src/usersController.ts#L21).

Code that sets up a 404 handler that returns JSON: [link](src/app.ts#L17).

From the outside, the server seems to function correctly:
```
$ curl -i 'localhost:3000/users/goose/sayHello'
HTTP/1.1 200 OK
...
"Hello, goose!"

$ curl -i 'localhost:3000/users/go%20se/sayHello'
HTTP/1.1 409 Conflict
...
{"error":"idHasSpace"}

$ curl -i 'localhost:3000/users/goose/xyz'
HTTP/1.1 404 Not Found
...
{"error":"notFound"}
```

The problem is that on the third request, the 404 handler throws an exception:
```
Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client
    at ServerResponse.setHeader (_http_outgoing.js:558:11)
    at ServerResponse.header (tsoa-404-exception/node_modules/express/lib/response.js:771:10)
    at ServerResponse.contentType (tsoa-404-exception/node_modules/express/lib/response.js:599:15)
    at tsoa-404-exception/build/app.js:18:21
    ...
```

Am I setting up the 404 handler incorrectly?  Is Tsoa not correctly marking the request as "handled" when I use `TsoaResponse`?

## Running

Setup: `yarn install`

Build: `yarn run tsoa spec-and-routes && yarn run tsc --build`

Run: `node build/server.js`
