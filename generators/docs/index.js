'use strict';
const BaseGenerator = require('../base-generator.class');

module.exports = class extends BaseGenerator {
  constructor(args, opts) {
    super(args, opts);

    // in case this generator is running solo, preset user inputs -
    this.props.createDocs = true;
  }

  prompting() {
    return this._Base_Prompting();
  }


  writing() {

    this.fs.copyTpl(
      this.templatePath('component-name-demo.controller.js'),
      this.destinationPath(`src/docs/demos/${this.props.componentName}/${this.props.componentName}-demo.controller.js`),
      this.props
    );

    this.fs.copyTpl(
      this.templatePath('component-name-demo.html'),
      this.destinationPath(`src/docs/demos/${this.props.componentName}/${this.props.componentName}-demo.html`),
      this.props
    );

    this.fs.copyTpl(
      this.templatePath('component-name-demo.md'),
      this.destinationPath(`src/docs/demos/${this.props.componentName}/${this.props.componentName}-demo.md`),
      this.props
    );

    this.fs.copyTpl(
      this.templatePath('component-name-demo.module.js'),
      this.destinationPath(`src/docs/demos/${this.props.componentName}/${this.props.componentName}-demo.module.js`),
      this.props
    );

  }

  end() {
    this.log([
      'New docs module created!',
      `Don't forget to manually inject the module into the docs at`,
      `src/docs/docs.module.js`,
      `And also at`,
      `src/docs/docs.html`,
    ].join('\n'));

  }

};
