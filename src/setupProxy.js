// const { createProxyMiddleware } = require('http-proxy-middleware');

// module.exports = function (app) {
//     app.use(
//       createProxyMiddleware("/device-types/*", {
//         target: "https://api.sigfox.com/v2",
//         secure: false,
//         changeOrigin: true,
//       })
//     );
//   // app.listen(3000)
// };
const filter = function (pathname, req) {
  return pathname.match("^/device-types") && req.method === "GET";
};

const apiProxy = createProxyMiddleware(filter, {
  target: "https://api.sigfox.com/v2/device-types",
  secure: false,
  changeOrigin: true,
});

module.exports = function (app) {
    app.use(
      apiProxy
    )}

