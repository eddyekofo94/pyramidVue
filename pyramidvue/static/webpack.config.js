

module.exports = {
  // This is the "main" file which should include all other modules
  entry: './index.js',
  // Where should the compiled file go?
  output: {
    path: __dirname + '/dist',
    publicPath: 'dist/',
    filename: 'build.js'
  },
  module: {
    // Special compilation rules
    loaders: [
      {
        // Ask webpack to check: If this file ends with .js, then apply some transforms
        test: /\.js$/,
        // Transform it with babel
        loader: 'babel-loader',
        // don't transform node_modules folder (which don't need to be compiled)
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
            loaders: {
              // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
              // the "scss" and "sass" values for the lang attribute to the right configs here.
              // other preprocessors should work out of the box, no loader config like this nessessary.
              'scss': 'vue-style-loader!css-loader!sass-loader',
              'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
          }
          // other vue-loader options go here
      }
    },
    {
      test: /\.(png|jpg|gif|svg)$/,
      loader: 'file-loader',
      options: {
          name: '[name].[ext]?[hash]'
      }
    },
     ]
  },
  resolve: {
        alias: {
            'vue$': 'vue/dist/vue.common.js'
        }
    }
}
