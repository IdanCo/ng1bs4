// Import Angular Resources
import template from './badge-demo.html';
import controller from './badge-demo.controller.js';

// Import Raw Files
import TemplateRaw from '!raw-loader!./badge-demo.html';
import MarkdownRaw from '!raw-loader!./badge-demo.md';

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
  .module('ng1bs4.docs.badgeDemo', [])
  .component('badgeDemo', Component)
  .name;
