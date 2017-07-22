// Import Template
import template from './alert.html';

const DEFAULT_ALERT_TYPE = 'info';

class controller {

  $onInit() {
    // Set defaults
    this.alertType = this.alertType || DEFAULT_ALERT_TYPE;
  }

}

// Define and export component
export default {
  bindings: {
    alertType: '<',
    alertDismissible: '<',
  },
  transclude: true,
  template,
  controller
};
