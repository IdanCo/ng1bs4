class controller {
  constructor($log) {
    Object.assign(this, {$log});

    this.demoObject = {
      foo: 'bar'
    };
    this.hallo = 'Hello from the demo side!';
  }

  demoFunction(param) {
    this.$log.info(this.hallo, param);
  }
}

export default controller;
