// Import Template
import template from './toggle.html';

// Set up controller
class controller {
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
