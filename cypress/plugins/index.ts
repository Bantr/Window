import codeCoverageTask from '@cypress/code-coverage/task';
import * as fs from 'fs';
import * as path from 'path';
/**
 * @type {Cypress.PluginConfig}
 */
export default (on: any, config: any): any => {
  on('task', {
    getSchema() {
      return fs.readFileSync(path.resolve(__dirname, '../schema.graphql'), 'utf8');
    }
  });

  codeCoverageTask(on, config);
  return config;
};
