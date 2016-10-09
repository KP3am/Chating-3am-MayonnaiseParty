var path = require('path');
var express = require('express');
var bs = require('browser-sync').create();
var app = express();
var PORT = process.env.PORT || 8787

// using webpack-dev-server and middleware in development environment
if(process.env.NODE_ENV !== 'production') {
  var webpackDevMiddleware = require('webpack-dev-middleware');
  var webpackHotMiddleware = require('webpack-hot-middleware');
  var webpack = require('webpack');
  var config = require('./webpack.config');
  var compiler = webpack(config);

  app.use(webpackDevMiddleware(compiler, { 
    noInfo: true, 
    publicPath: config.output.publicPath,
    stats: {
        colors: true
    }
  }));
  app.use(webpackHotMiddleware(compiler));
}

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', function(request, response) {
  response.sendFile(__dirname + '/dist/index.html')
});

// app.listen(PORT, function(error) {
//   if (error) {
//     console.error(error);
//   } else {
//     console.info("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
//   }
// });

const hotport = 9487;
app.listen(PORT, function(){
    bs.init({
        open: false,
        ui: false,
        notify: false,
        proxy: 'localhost:8787',
        files: ['./dist/*'],
        port: hotport
    });
    console.log(`App (dev) is going to be running on port ${hotport} (by browsersync).`);
});