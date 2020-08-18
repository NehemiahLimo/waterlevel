const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
      createProxyMiddleware("/devices", {
        target: "https://api.sigfox.com/v2",
        secure: false,
        changeOrigin: true,
        ws: true
      })
    );
  // app.listen(3000)
};



// // include dependencies
// var express = require('express')
// var proxy = require('http-proxy-middleware')

// // proxy middleware options
// var options = {
//   target: 'https://api.sigfox.com/v2', // target host
//   changeOrigin: true, // needed for virtual hosted sites
//   ws: true, // proxy websockets
//   pathRewrite: {
//     '^/api/old-path': '/api/new-path', // rewrite path
//     '^/api/remove/path': '/path' // remove base path
//   },
//   router: {
//     // when request.headers.host == 'dev.localhost:3000',
//     // override target 'http://www.example.org' to 'http://localhost:8000'
//     'localhost:3000': 'http://localhost:3000/'
//   }
// }

// // create the proxy (without context)
// var exampleProxy = proxy(options)

// // mount `exampleProxy` in web server
// var app = express()
// app.use('/device-types', exampleProxy)
// app.listen(3000)