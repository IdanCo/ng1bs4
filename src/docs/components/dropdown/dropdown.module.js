// Import Raw Files
import TemplateRaw from '!raw-loader!./dropdown.html';
import ControllerRaw from '!raw-loader!./dropdown.controller.js';
import MarkdownRaw from '!raw-loader!./dropdown.md';

// Import Angular Resources
import Template from './dropdown.html';
import Controller from './dropdown.controller.js';

// manipulate controller to pass raw files to demo
Controller.prototype.$onInit = function() {
  this.demo.html = TemplateRaw;
  this.demo.js = ControllerRaw;
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
  .module('ng1bs4.docs.dropdownDemo', [])
  .component('dropdownDemo', Component)
  .name;
