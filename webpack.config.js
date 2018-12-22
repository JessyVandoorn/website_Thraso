const path = require(`path`);


const ImageminPlugin = require(`imagemin-webpack-plugin`).default;
const imageminJpegRecompress = require(`imagemin-jpeg-recompress`);

const merge = require(`webpack-merge`);
const parts = require(`./webpack.parts`);
const webpack = require(`webpack`);

const imagemin = require(`imagemin`);
const imageminMozjpeg = require(`imagemin-mozjpeg`);

(async () => {
  await imagemin([`images/*.jpg`], `build/images`, {
    use: [
      imageminMozjpeg()
    ]
  });

  console.log(`Images optimized`);
})();

// const CriticalPlugin = require(`webpack-plugin-critical`).CriticalPlugin;

const PATHS = {
  src: path.join(__dirname, `src`),
  dist: path.join(__dirname, `dist`),
};

const commonConfig = {
  entry: [
    path.join(PATHS.src, `js/script.js`),
    path.join(PATHS.src, `css/style.css`),
  ],
  output: {
    path: PATHS.dist,
    filename: `js/script.js`,
  },
  module: {
    rules: [
      {
        test: /\.(jpe?g|png|gif|webp|svg)$/,
        use:[
          {
            loader: `file-loader`,
            options: {
              limit: 1000,
              context: `./src`,
              name: `[path][name].[ext]`
            }
          },{
            loader: `image-webpack-loader`,
            options: {
              bypassOnDebug: true,
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              // optipng.enabled: false will disable optipng
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: '65-90',
                speed: 4
              },
              gifsicle: {
                interlaced: false,
              },
              // the webp option will enable WEBP
              webp: {
                quality: 75
              }
            },
          },
        ]
      },
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: `babel-loader`,
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      Promise: `es6-promise`,
      fetch: `imports-loader?this=>global!exports-loader?global.fetch!whatwg-fetch`,
    }),
  ],
};

const productionConfig = merge([
  parts.extractCSS(),
  {
    plugins: [
      new ImageminPlugin({
        test: /\.(jpe?g)$/i,
        plugins: [
          imageminJpegRecompress({})
        ]
      })
    ]
  }
]);

const developmentConfig = merge([
  {
    devServer: {
      overlay: true,
      contentBase: PATHS.src,
      port: 3500
    },
  },
  parts.loadCSS(),
]);

module.exports = () => {
  if (process.env.NODE_ENV === `production`) {
    console.log(`building production`);
    return merge(commonConfig, productionConfig);
  }
  return merge(commonConfig, developmentConfig);
};
