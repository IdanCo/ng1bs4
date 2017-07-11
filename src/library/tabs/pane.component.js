// Import Template
import template from './pane.html';

class controller {
  $onInit() {
    this.tabsCtrl.addPane(this);
  };
}

// Define and export component
export default {
  transclude: true,
  require: {
    tabsCtrl: '^ngbsTabs'
  },
  bindings: {
    title: '@'
  },
  template,
  controller
};
//
// function controller() {
//   const vm = this;
//   vm.$onInit = function() {
//     console.info('adding', this);
//     vm.tabsCtrl.addPane(this);
//   };
// }
