// Import Template
import template from './pane.html';

// Define and export component
export default {
  transclude: true,
  require: {
    tabsCtrl: '^ngbsTabs'
  },
  bindings: {
    title: '@'
  },
  template: template,
  controller: controller,
  controllerAs: 'vm'
};

function controller() {
  const vm = this;
  vm.$onInit = function() {
    vm.tabsCtrl.addPane(this);
  };
}
