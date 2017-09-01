// Import Template
import template from './alert.html';

const DEFAULT_ALERT_TYPE = 'info';
const DEFAULT_ALERT_DISMISSIBLE = false;

class controller {
  constructor() {
    this.dismissed = false;
  }

  $onInit() {
  }

  $onChanges() {
    // set defaults
    this.alertType = this.alertType || DEFAULT_ALERT_TYPE;
    this.alertDismissible = this.alertDismissible || DEFAULT_ALERT_DISMISSIBLE;
    
    // (re)validate bindings
    if (this.alertType && (typeof this.alertType !== 'string' || ['success', 'info', 'warning', 'danger'].includes(this.alertType) === false)) {
      this.$log.error('invalid ngbsAlert::alertType:', JSON.stringify(this.alertType), 'expecting "success", "info", "warning", or "danger"');
    }

    if (this.alertDismissible && typeof this.alertDismissible !== 'boolean') {
      this.$log.error('invalid ngbsAlert::alertDismissible:', JSON.stringify(this.alertDismissible), 'expecting a boolean');
    }
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
