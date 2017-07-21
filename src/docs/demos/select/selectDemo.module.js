// Import Angular Resources
import template from './selectDemo.html';
import controller from './selectDemo.controller.js';

// Import Raw Files
import TemplateRaw from '!raw-loader!./selectDemo.html';
import ControllerRaw from '!raw-loader!./selectDemo.controller.js';
import MarkdownRaw from '!raw-loader!./selectDemo.md';

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
  .module('ng1bs4.docs.selectDemo', [])
  .component('selectDemo', Component)
  .name;
