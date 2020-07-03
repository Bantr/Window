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

const PublicEnvironmentVariables = {
  'process.env': {
    'API_ROOT': JSON.stringify(process.env.API_ROOT),
    'FACEIT_API_KEY': JSON.stringify(process.env.FACEIT_API_KEY),
    'SENTRY_DSN': JSON.stringify(process.env.SENTRY_DSN)
  }
}

const commonConfig = merge([
  parts.start(),
  parts.aliases(),
  parts.IO(),
  parts.loadHtml(),
  parts.cssExtract(),
  parts.dotEnv(PublicEnvironmentVariables),
  parts.progress(),
])

const productionConfig = merge([
  parts.cleanDist(),
  parts.manifest(),
  parts.loaders({ filename: '[contenthash].[ext]' }),
  parts.banner(),
  parts.minify(),
  parts.minimizeImages(),
  parts.ServiceWorker(),
  parts.CopyPublicFolder(),
]);

const developmentConfig = merge([
  parts.loaders({ filename: '[name].[ext]' }),
  parts.devServer({
    host: process.env.HOSTNAME,
    port: process.env.PORT
  }),
  parts.sourceMap(),
  parts.RebuildOnModuleInstall(),
  parts.OSXDevSupport(),
]);

const CIConfig = merge([
  parts.sentry({ releaseVersion: process.env.npm_package_version })
])

console.log('ci env', !!process.env.CI);

module.exports = ({ mode }) => {
  console.log(chalk.white('webpack mode:'), chalk.green(mode));
  switch (mode) {
    case 'development':
      return merge(commonConfig, developmentConfig, { mode })
    case 'production':
      return merge(commonConfig, productionConfig, isStringTrue(process.env.CI) ? CIConfig : null, { mode })
  }
}