// Import Raw Files
import TemplateRaw from '!raw-loader!./tabs.html';
import MarkdownRaw from '!raw-loader!./tabs.md';

// Import Angular Resources
import Template from './tabs.html';
import Controller from './tabs.controller.js';

// manipulate controller to pass raw files to demo
Controller.prototype.$onInit = function() {
  this.demo.jade = TemplateRaw;
  this.demo.md = MarkdownRaw;
};

// Component definition
const Component = {
  require: {
    demo: '^demo',
  },
  template: Template,
  controller: Controller,
  controllerAs: 'vm'
};

// Register module, register component and export name
export default angular
  .module('ng1bs4.docs.tabsDemo', [])
  .component('tabsDemo', Component)
  .name;
