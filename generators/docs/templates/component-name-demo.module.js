// Import Angular Resources
import template from './<%- componentName %>-demo.html';
import controller from './<%- componentName %>-demo.controller.js';

// Import Raw Files
import TemplateRaw from '!raw-loader!./<%- componentName %>-demo.html';
import ControllerRaw from '!raw-loader!./<%- componentName %>-demo.controller.js';
import MarkdownRaw from '!raw-loader!./<%- componentName %>-demo.md';

// manipulate controller to pass raw files up to demo
controller.prototype.$onInit = function() {
  this.demo.html = TemplateRaw;
  this.demo.js = ControllerRaw;
  this.demo.md = MarkdownRaw;
};

// Component definition
const Component = {
  require: {
    demo: '^demo'
  },
  template,
  controller
};

// Register module, register component and export name
export default angular
  .module('ng1bs4.docs.<%- camelName %>Demo', [])
  .component('<%- camelName %>Demo', Component)
  .name;
