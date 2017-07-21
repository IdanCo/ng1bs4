// Import Template
import template from './menu.html';

const DEFAULT_MENU_DISPLAY = 'Chose an action';
const DEFAULT_MENU_ACTIONS = [
  { display: 'action1', action: () => alert('action1') },
  { display: 'action2', action: () => alert('action2') }
];

// Set up controller
class controller {
  constructor($element) {
    this.$element = $element;
  }

  $onInit() {
    this.menuDisplay = this.menuDisplay || DEFAULT_MENU_DISPLAY;
    this.menuActions = this.menuActions || DEFAULT_MENU_ACTIONS;
  }
}

// Define and export component
export default {
  bindings: {
    menuDisplay: '@',
    menuActions: '<'
  },
  template,
  controller
};