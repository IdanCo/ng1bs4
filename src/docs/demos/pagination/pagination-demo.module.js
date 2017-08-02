// Import Angular Resources
import template from './pagination-demo.html';
import controller from './pagination-demo.controller.js';

// Import Raw Files
import TemplateRaw from '!raw-loader!./pagination-demo.html';
import ControllerRaw from '!raw-loader!./pagination-demo.controller.js';
import MarkdownRaw from '!raw-loader!./pagination-demo.md';

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
  .module('ng1bs4.docs.paginationDemo', [])
  .component('paginationDemo', Component)
  .name;
