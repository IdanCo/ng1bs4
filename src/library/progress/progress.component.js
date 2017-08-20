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
    if (this.progressMax && (typeof this.progressMax !== 'number' || isFinite(this.progressMax) === false)) {
      this.$log.error('invalid ngbsProgress::progressMax:', JSON.stringify(this.progressMax), 'expecting a number');
    }

    if (this.progressValue && (typeof this.progressValue !== 'number' || isFinite(this.progressValue) === false)) {
      this.$log.error('invalid ngbsProgress::progressValue:', JSON.stringify(this.progressValue), 'expecting a number');
    }

    if (this.progressAnimatedProgression && typeof this.progressAnimatedProgression !== 'boolean') {
      this.$log.error('invalid ngbsProgress::progressAnimatedProgression:', JSON.stringify(this.progressAnimatedProgression), 'expecting a boolean');
    }

    if (this.progressAutoLabel && typeof this.progressAutoLabel !== 'boolean') {
      this.$log.error('invalid ngbsProgress::progressAutoLabel:', JSON.stringify(this.progressAutoLabel), 'expecting a boolean');
    }

    if (this.progressStriped && typeof this.progressStriped !== 'boolean') {
      this.$log.error('invalid ngbsProgress::progressStriped:', JSON.stringify(this.progressStriped), 'expecting a boolean');
    }

    if (this.progressAnimatedStripes && typeof this.progressAnimatedStripes !== 'boolean') {
      this.$log.error('invalid ngbsProgress::progressAnimatedStripes:', JSON.stringify(this.progressAnimatedStripes), 'expecting a boolean');
    }

    if (this.progressBackground && SUPPORTED_BACKGROUNDS.includes(this.progressBackground) === false) {
      this.$log.error('invalid ngbsProgress::progressBackground:', JSON.stringify(this.progressBackground), 'expecting one of the following', SUPPORTED_BACKGROUNDS);
    }

    // recalculate percentage if progressMax/progressValue change
    if (changesObj.progressValue || changesObj.progressMax) {
      this.percentage = this.progressValue / this.progressMax * 100;
      this.roundedPercentage = Math.round(this.percentage);
    }
  }
}

// Define and export component
export default {
  bindings: {
    progressAnimatedProgression: '<',
    progressAnimatedStripes: '<',
    progressAutoLabel: '<',
    progressBackground: '<',
    progressMax: '<',
    progressStriped: '<',
    progressValue: '<',
  },
  transclude: true,
  template,
  controller,
};
