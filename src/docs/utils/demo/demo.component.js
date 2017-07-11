// Import Template
import template from './demo.html';

// Define and export component
export default {
  transclude: true,
  template: template,
  controllerAs: 'vm',
  controller: controller
};

/*@ngInject*/
function controller() {
  this.jade = null;
  this.js = null;
}
