/**
 * Copyright (c) 2020-present, Bantr, Inc.
 * Emiel Van Severen
 */

// const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack');
const dotenv = require('dotenv');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const SentryWebpackPlugin = require('@sentry/webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const CopyWebpackPlugin = require('copy-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const path = require('path');
const chalk = require('chalk');

const createStyledComponentsTransformer = require('typescript-plugin-styled-components').default;
const styledComponentsTransformer = createStyledComponentsTransformer();

exports.start = (ci) => {
  console.log('Webpack has been started..');
  console.log('CI: ', chalk.green(ci ? true : false));
};

exports.IO = () => ({
  devtool: '',
  target: 'web',
  // startpoint
  entry: {
    index: path.join(__dirname, '/src/index.tsx'),
    polyfills: path.join(__dirname, '/src/polyfills.ts')
  },
  // on production this returns one bundled js file. To avoid caching a hash is added.
  output: {
    chunkFilename: '[name].js',
    filename: '[name].bundle.[hash:8].js',
    publicPath: '/' // fixes mime type error when links are clicked (history fallback api bug)
  },
});

exports.progress = () => ({
  plugins: [
    new ProgressBarPlugin({
      format: 'build [:bar] ' + chalk.green.bold(':percent') + ' (:elapsed seconds)',
      clear: false
    })
  ]
});

exports.dotEnv = (env) => ({
  plugins: [
    new webpack.DefinePlugin(env)
  ]
});

exports.CopyPublicFolder = () => ({
  plugins: [
    new CopyWebpackPlugin([
      { from: 'public', to: '' }
    ])
  ]
})

exports.devServer = ({ host, port } = { host: 'localhost', port: 8080 }) => ({
  devServer: {
    host: host,
    port: port,
    open: true,
    stats: 'errors-only',
    hot: true,
    overlay: {
      warnings: false,
      errors: true
    },
    compress: true,
    disableHostCheck: true,
    public: 'dev-client.bantr.app',
    historyApiFallback: true, // path changes react router dom.,
    after: () => console.log('Development server has been started.')
  }
});
exports.banner = () => ({
  plugins: [
    new webpack.BannerPlugin({
      banner: 'contributed by: github.com/emielvanseveren, github.com/niekcandaele hash:[hash] name:[name]'
    })
  ]
});
exports.cleanDist = () => ({
  plugins: [
    new CleanWebpackPlugin({
      verbose: false
    })
  ]
});
exports.sourceMap = () => ({
  devtool: 'source-map'
});

// This lets you view source code context obtained from stack traces in their original untransformed form.
exports.sentry = (appName, appVersion) => ({
  plugins: [
    new SentryWebpackPlugin({
      include: '.',
      ignoreFile: '.gitignore',
      ignore: [
        'webpack.config.js',
        'webpack.parts.js',
        'cypress',
        'storybook',
        'public',
        '@types',
        'scripts'
      ],
      ext: ['.ts',],
      release: `${appName}-v${appVersion}`,
      configFile: '.sentry.properties',
    })
  ]
});

exports.RebuildOnModuleInstall = () => ({
  plugins: [new WatchMissingNodeModulesPlugin(path.resolve('node_modules'))]
});

exports.loadHtml = () => ({
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: 'index.html'
    })
  ]
});
exports.cssExtract = () => ({
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].min.css',
      chunkFilename: '[id].css'
    })
  ]
});
exports.minify = () => ({
  optimization: {
    minimizer: [
      new TerserPlugin({
        parallel: 4,
        sourceMap: false,
        terserOptions: {
          ecma: 7,
          warnings: false,
          output: true,
          ie8: false,
          compress: {},
          mangle: true,
          safari10: false
        }
      }),
      new OptimizeCSSAssetsPlugin({})
    ],
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 0
    }
  }
});
exports.manifest = () => ({
  plugins: [new ManifestPlugin()]
});
exports.minimizeImages = () => ({
  plugins: [
    new ImageminPlugin({
      test: 'dist/**',
      pngquant: {
        quality: '95-100'
      }
    })
  ]
});

exports.OSXDevSupport = () => ({
  plugins: [new CaseSensitivePathsPlugin()]
});

exports.ServiceWorker = () => ({
  plugins: [
    new WorkboxWebpackPlugin.GenerateSW({
      clientsClaim: true, // Whether or not the service worker should start controlling any existing clients as soon as it activates.
      exclude: [/\.map$/, /asset-manifest\.json$/]
    })
  ]
});

exports.aliases = () => ({
  resolve: {
    extensions: ['.ts', '.tsx', '.js', 'jsx', '.json'],
    alias: {
      'lib': path.resolve(__dirname, 'lib')
    }
  }
});

exports.loaders = ({ filename }) => ({
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          {
            loader: 'ts-loader',
            options: { getCustomTransformers: () => ({ before: [styledComponentsTransformer] }) }
          }
        ]
      },
      {
        test: /\.(jsx)$/,
        exclude: /node_modules/,
        use: ['babel']
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      },
      {
        test: /\.(css|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.(jp?g|png|svg|webp|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 8192,
            fallback: 'file-loader',
            name: filename,
            outputPath: 'images'
          }
        }
      },
      {
        test: /\.(ogg|mp3|wav|mpe?g)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]'
        }
      },
      {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        use: ['graphql-tag/loader']
      }
    ]
  }
});
