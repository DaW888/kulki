const path = require('path');
module.exports = {
    entry: {
        index: './src/index.ts',
        
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'index.js',
    },
    watch: true,

    module: {
        rules: [
          {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
          }
        ]
      },
      resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
      },
};
