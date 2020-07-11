import codeCoverageTask from '@cypress/code-coverage/task';

/**
 * @type {Cypress.PluginConfig}
 */
export default (on: any, config: any): any => {
  codeCoverageTask(on, config);
  return config;
};
