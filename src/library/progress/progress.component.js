// Import Template
import template from './progress.html';

const SUPPORTED_BACKGROUNDS = ['', 'primary', 'success', 'info', 'warning', 'danger', 'inverse', 'faded'];

// Set up controller
class controller {
  constructor($log) {
    Object.assign(this, {
      $log
    });

    this.percentage = 0;
    this.roundedPercentage = 0;
  }

  $onChanges(changesObj) {
    // (re)validate bindings
    if (this.max && (typeof this.max !== 'number' || isFinite(this.max) === false)) {
      this.$log.error('invalid ngbsProgress::max:', JSON.stringify(this.max), 'expecting a number');
    }

    if (this.value && (typeof this.value !== 'number' || isFinite(this.value) === false)) {
      this.$log.error('invalid ngbsProgress::value:', JSON.stringify(this.value), 'expecting a number');
    }

    if (this.animatedProgress && typeof this.animatedProgress !== 'boolean') {
      this.$log.error('invalid ngbsProgress::animatedProgress:', JSON.stringify(this.animatedProgress), 'expecting a boolean');
    }

    if (this.autoLabel && typeof this.autoLabel !== 'boolean') {
      this.$log.error('invalid ngbsProgress::autoLabel:', JSON.stringify(this.autoLabel), 'expecting a boolean');
    }

    if (this.striped && typeof this.striped !== 'boolean') {
      this.$log.error('invalid ngbsProgress::striped:', JSON.stringify(this.striped), 'expecting a boolean');
    }

    if (this.animatedStripes && typeof this.animatedStripes !== 'boolean') {
      this.$log.error('invalid ngbsProgress::animatedStripes:', JSON.stringify(this.animatedStripes), 'expecting a boolean');
    }

    if (this.background && SUPPORTED_BACKGROUNDS.includes(this.background) === false) {
      this.$log.error('invalid ngbsProgress::background:', JSON.stringify(this.background), 'expecting one of the following', SUPPORTED_BACKGROUNDS);
    }

    // recalculate percentage if max/value change
    if (changesObj.value || changesObj.max) {
      this.percentage = this.value / this.max * 100;
      this.roundedPercentage = Math.round(this.percentage);
    }
  }
}

// Define and export component
export default {
  bindings: {
    animatedProgress: '<',
    animatedStripes: '<',
    autoLabel: '<',
    background: '<',
    max: '<',
    striped: '<',
    value: '<',
  },
  transclude: true,
  template,
  controller,
};
