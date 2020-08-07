/*
import * as fs from 'fs';
import * as path from 'path';
*/
/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {

  /*
  on('task', {
    getSchema() {
      return fs.readFileSync(path.resolve(__dirname, '../../lib/graphql/schema.graphql'), 'utf8');
    }
  });
  */

  // eslint-disable-next-line @typescript-eslint/no-var-requires
  require('@cypress/code-coverage/task')(on, config);
  return config;
};
