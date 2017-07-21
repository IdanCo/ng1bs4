class controller {
  constructor($log) {
    this.$log = $log;
    this.selectOptions = [
      {
        display: 'First Option',
        id: 1
      },
      {
        display: 'Second Option',
        id: 2
      },
      {
        display: 'Third Option',
        id: 3
      },
      {
        display: '<b>with</b> <i>html</i>',
        id: 4
      },
      {
        display: 'Fifth Option',
        id: 5
      },
      {
        display: 'Sixth Option',
        id: 6
      },
      {
        display: 'Seventh Option',
        id: 7
      },
      {
        display: 'Eighth Option',
        id: 8
      },
      {
        display: 'Ninth Option',
        id: 9
      }
    ];
  }

  valueChanged() {
    this.$log.info('value changed!');
  }
}

export default controller;