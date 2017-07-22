// Import Template
import template from './alert.html';

class controller {
  constructor() {
  }
}

// Define and export component
export default {
  bindings: {
    alertType: '<',
  },
  transclude: true,
  template,
  controller
};