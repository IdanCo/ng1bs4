'use strict';
const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    this.props = opts || {};
  }

  _Base_Prompting() {

    const prompts = [{
      when: !this.props.componentName,
      type: 'input',
      name: 'componentName',
      validate: (a) => !!a || 'Component must have a name',
      message: 'What is the name of the component? (use hyphen to separate words)'
    },
    {
      when: !this.props.createDocs,
      type: 'confirm',
      name: 'createDocs',
      message: 'Would you also like to create documentation for the new component?',
      default: true
    },
    {
      when: !this.props.createTest,
      type: 'confirm',
      name: 'createTest',
      message: 'Would you also like to create tests for the new component?',
      default: true
    }];

    return this.prompt(prompts).then(props => {
      if (props.componentName) {
        props.camelName = props.componentName.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); });
        props.capitalName = props.camelName.charAt(0).toUpperCase() + props.camelName.slice(1);
      }

      // To access props later use this.props.someAnswer;
      Object.assign(this.props, props);
    });
  }

};
