// Import Template
import template from './toggle.html';

// Set up default values


// Set up controller
class controller {
  constructor($element, $log) {
    // make injected available throughout the controller via this.$service
    Object.assign(this, {$element, $log});
  }

  switchToggle() {
    this.ngModel.$setViewValue(!this.ngModel.$modelValue);
  }
}

// Define and export component
export default {
  bindings: {
    toggleText: '@',
  },
  require: {
    ngModel: 'ngModel'
  },
  template,
  controller
};
