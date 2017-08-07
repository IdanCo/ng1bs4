// Import Template
import template from './<%- componentName %>.html';

// Set up default values
const DEFAULT_STRING = 'i\'m a string!';

// Set up controller
class controller {
  constructor($element, $log) {
    // make injected available throughout the controller via this.$service
    Object.assign(this, {$element, $log});
  }

  $onInit() {
    // Set defaults
    this.<%- camelName %>String = this.<%- camelName %>String || DEFAULT_STRING;
    this.hallo = 'hello from the component side!';
  }

  doSomething() {
    this.$log.info('you clicked a button! enjoy this binded object: ', this.<%- camelName %>Object);
    this.<%- camelName %>Function({param: this.hallo});
  }
}

// Define and export component
export default {
  bindings: {
    <%- camelName %>String: '@',
    <%- camelName %>Object: '<',
    <%- camelName %>Function: '&'
  },
  template,
  controller
};
