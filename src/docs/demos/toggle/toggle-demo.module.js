// Import Angular Resources
import template from './toggle-demo.html';
import controller from './toggle-demo.controller.js';

// Import Raw Files
import TemplateRaw from '!raw-loader!./toggle-demo.html';
import ControllerRaw from '!raw-loader!./toggle-demo.controller.js';
import MarkdownRaw from '!raw-loader!./toggle-demo.md';

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
  .module('ng1bs4.docs.toggleDemo', [])
  .component('toggleDemo', Component)
  .name;
