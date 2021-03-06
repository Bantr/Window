require('dotenv').config();
const merge = require('webpack-merge');
const parts = require('./webpack.parts.js');
const chalk = require('chalk');

function isStringTrue(val) {
  if (val === 'true') {
    return true;
  }
  return false;
}

const isDevelopment = process.env.NODE_ENV !== 'production';
const PublicEnvironmentVariables = {
  'process.env': {
    'API_ROOT': JSON.stringify(process.env.API_ROOT),
    'FACEIT_API_KEY': JSON.stringify(process.env.FACEIT_API_KEY),
    'SENTRY_DSN': JSON.stringify(process.env.SENTRY_DSN),
    'CLIENT_APP_NAME': JSON.stringify(process.env.npm_package_name),
    'CLIENT_APP_VERSION': JSON.stringify(process.env.npm_package_version)
  }
}

const commonConfig = merge([
  parts.start(process.env.CI),
  parts.aliases(),
  parts.IO(isDevelopment),
  parts.loadHtml(),
  parts.cssExtract(),
  parts.dotEnv(PublicEnvironmentVariables),
  parts.progress(),
])

const productionConfig = merge([
  parts.cleanDist(),
  parts.manifest(),
  parts.loaders({ filename: '[contenthash].[ext]', isDevelopment: false }),
  parts.banner(),
  parts.minify(),
  parts.minimizeImages(),
  parts.ServiceWorker(),
  parts.CopyPublicFolder(),
  parts.sentry(process.env.npm_package_version, process.env.SENTRY_AUTH_TOKEN)
]);

const developmentConfig = merge([
  parts.loaders({ filename: '[name].[ext]', isDevelopment: true }),
  parts.devServer({
    hostname: process.env.HOSTNAME,
    port: process.env.PORT
  }),
  parts.reactRefresh(),
  parts.sourceMap(),
  parts.RebuildOnModuleInstall(),
  parts.OSXDevSupport(),
  parts.istanbul(), // instrument code for when using cypress
]);

const CIConfig = merge([
  parts.istanbul()
])

module.exports = ({ mode }) => {
  console.log(chalk.white('webpack mode:'), chalk.green(mode));
  switch (mode) {
    case 'development':
      return merge(commonConfig, developmentConfig, { mode })
    case 'production':
      return merge(commonConfig, productionConfig, isStringTrue(process.env.CI) ? CIConfig : null, { mode })
  }
}