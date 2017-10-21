// Import Template
import template from './badge.html';

// Set up default values
const DEFAULT_TYPE = 'primary';

// Set up controller
class controller {

  $onInit() {
    // Set defaults
    this.badgeType = DEFAULT_TYPE;
  }
}

// Define and export component
export default {
  bindings: {
    badgeType: '@',
    badgePill: '<'
  },
  transclude: true,
  template,
  controller
};
