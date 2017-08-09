'use strict';
const BaseGenerator = require('../base-generator.class');
const assetModifier = require('../asset-modifier');

module.exports = class extends BaseGenerator {
  
  prompting() {
    return this._Base_Prompting();
  }

  writing() {

    this.fs.copyTpl(
      this.templatePath('component-name.module.js'),
      this.destinationPath(`src/library/${this.props.componentName}/${this.props.componentName}.module.js`),
      this.props
    );

    this.fs.copyTpl(
      this.templatePath('component-name.html'),
      this.destinationPath(`src/library/${this.props.componentName}/${this.props.componentName}.html`),
      this.props
    );

    this.fs.copyTpl(
      this.templatePath('component-name.scss'),
      this.destinationPath(`src/library/${this.props.componentName}/${this.props.componentName}.scss`),
      this.props
    );

    this.fs.copyTpl(
      this.templatePath('component-name.component.js'),
      this.destinationPath(`src/library/${this.props.componentName}/${this.props.componentName}.component.js`),
      this.props
    );

  }

  end() {
    assetModifier.addComponentToModule('./src/library/library.module.js', 'Module', '', '', this.props.componentName, this.props.camelName, this.props.capitalName);

    this.log([
      'New component module created!',
    ].join('\n'));

    if (this.props.createDocs) this.composeWith(require.resolve('../docs'), this.props);
  }

};
