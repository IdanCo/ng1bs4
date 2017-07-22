// Import Template
import template from './tabs.html';

class controller {
  constructor() {
    this.panes = [];
  }

  select(pane) {
    angular.forEach(this.panes, function(pane) {
      pane.selected = false;
    });
    pane.selected = true;
  }

  addPane(pane) {
    if (this.panes.length === 0) {
      this.select(pane);
    }
    this.panes.push(pane);
  }
}
// Define and export component
export default {
  transclude: true,
  template,
  controller
};
