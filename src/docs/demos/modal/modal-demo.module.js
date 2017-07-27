// Import Angular Resources
import template from './modal-demo.html';
import controller from './modal-demo.controller.js';

// Import Raw Files
import TemplateRaw from '!raw-loader!./modal-demo.html';
import ControllerRaw from '!raw-loader!./modal-demo.controller.js';
import MarkdownRaw from '!raw-loader!./modal-demo.md';

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
  .module('ng1bs4.docs.modalDemo', [])
  .component('modalDemo', Component)
  .name;
