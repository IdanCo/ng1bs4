// Import Angular Resources
import template from './tabs.html';
import controller from './tabs.controller.js';

// Import Raw Files
import TemplateRaw from '!raw-loader!./tabs.html';
import MarkdownRaw from '!raw-loader!./tabs.md';

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
