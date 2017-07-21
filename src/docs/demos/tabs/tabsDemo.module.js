// Import Angular Resources
import template from './tabsDemo.html';
import controller from './tabsDemo.controller.js';

// Import Raw Files
import TemplateRaw from '!raw-loader!./tabsDemo.html';
import MarkdownRaw from '!raw-loader!./tabsDemo.md';

// manipulate controller to pass raw files up to demo
controller.prototype.$onInit = function() {
  this.demo.html = TemplateRaw;
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
  .module('ng1bs4.docs.tabsDemo', [])
  .component('tabsDemo', Component)
  .name;
