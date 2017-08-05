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

  $onInit() {
    // validate bindings
    if (this.max && (typeof this.max !== 'number' || isFinite(this.max) === false)) {
      this.$log.error('invalid ngbsProgress::max:', this.max, 'expecting a number');
    }

    if (this.value && (typeof this.value !== 'number' || isFinite(this.value) === false)) {
      this.$log.error('invalid ngbsProgress::value:', this.value, 'expecting a number');
    }

    if (this.animatedProgress && typeof this.animatedProgress !== 'boolean') {
      this.$log.error('invalid ngbsProgress::animatedProgress:', this.animatedProgress, 'expecting a boolean');
    }

    if (this.autoLabel && typeof this.autoLabel !== 'boolean') {
      this.$log.error('invalid ngbsProgress::autoLabel:', this.autoLabel, 'expecting a boolean');
    }

    if (this.striped && typeof this.striped !== 'boolean') {
      this.$log.error('invalid ngbsProgress::striped:', this.striped, 'expecting a boolean');
    }

    if (this.animatedStripes && typeof this.animatedStripes !== 'boolean') {
      this.$log.error('invalid ngbsProgress::animatedStripes:', this.animatedStripes, 'expecting a boolean');
    }

    if (this.background && SUPPORTED_BACKGROUNDS.includes(this.background) === false) {
      this.$log.error('invalid ngbsProgress::background:', this.background, 'expecting one of the following', SUPPORTED_BACKGROUNDS);
    }
  }

  $onChanges(changesObj) {
    // recalculate percentage if max/value change
    if ((changesObj.value && changesObj.value.isFirstChange() === false) || (changesObj.max && changesObj.max.isFirstChange() === false)) {
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
