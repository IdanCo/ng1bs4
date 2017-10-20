class controller {
  constructor($log) {
    Object.assign(this, {$log});
    this.toggleValue = true;
  }

  valueChanged() {
    this.$log.info('value changed!');
  }
}

export default controller;
