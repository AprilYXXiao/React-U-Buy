console.error('proxy file');
const { createProxyMiddleware } = require('http-proxy-middleware');

// throw new Error("SZE SZE")

module.exports = function(app) {
    app.use(
        "/register",
        createProxyMiddleware({
            target: "http://optubuy.us-east-2.elasticbeanstalk.com",
            changeOrigin: true,
            logLevel: "debug",
        })
    );
    app.use(
        `/login`,
        createProxyMiddleware({
            target: "http://optubuy.us-east-2.elasticbeanstalk.com",
            changeOrigin: true,
            logLevel: "debug",
        })
    );

    app.use(
        "/genres",
        createProxyMiddleware({
            target: "http://localhost:9999",
            changeOrigin: true,
            logLevel: "debug",
        })
    );
   app.use(
       "/products",
       createProxyMiddleware({
           target: "http://localhost:9999",
           changeOrigin: true,
           logLevel: "debug",
       })
   );
    app.use(
        "/user",
        createProxyMiddleware({
            target: "http://optubuy.us-east-2.elasticbeanstalk.com",
            changeOrigin: true,
            logLevel: "debug",
        })
    );

}
