// Import Template
import template from './tabs.html';

// Define and export component
export default {
  transclude: true,
  template: template,
  controller: controller,
  controllerAs: 'vm'
};

function controller() {
  const vm = this;
  vm.panes = [];

  vm.select = function(pane) {
    angular.forEach(vm.panes, function(pane) {
      pane.selected = false;
    });
    pane.selected = true;
  };

  vm.addPane = function(pane) {
    if (vm.panes.length === 0) {
      vm.select(pane);
    }
    vm.panes.push(pane);
  };
}
