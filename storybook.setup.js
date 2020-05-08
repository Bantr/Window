require('dotenv').config();
const storybook = require('@storybook/react/standalone');

storybook({
  mode: 'dev',
  port: process.env.PORT,
  host: process.env.HOSTNAME,
  configDir: './.storybook'
});
