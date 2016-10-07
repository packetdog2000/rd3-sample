module.exports = {
    context: __dirname+'/src',
    entry: [
      './index.js'
    ],
    output: {
      path: __dirname,
      publicPath: '/',
      filename: 'bundle.js'
    },
    module: {
      loaders: [{
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015', 'stage-1']
        }
    },
    { test: /\.(woff|woff2)$/,  loader: "url-loader?limit=10000&mimetype=application/font-woff" },
         { test: /\.ttf$/,    loader: "file-loader" },
         { test: /\.eot$/,    loader: "file-loader" },
         { test: /\.svg$/,    loader: "file-loader" }
     ]
    },
    resolve: {
      extensions: ['', '.js', '.jsx']
    },
    devServer: {
        inline: true,
      historyApiFallback: true,
      contentBase: './'
    }
  };
