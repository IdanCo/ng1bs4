class controller {
  constructor() {
    this.longArray = [
      {
        name: 'First Option',
        id: 1
      },
      {
        name: 'Second Option',
        id: 2
      },
      {
        name: 'Third Option',
        id: 3
      },
      {
        name: '<b>with</b> <i>html</i>',
        id: 4
      },
      {
        name: 'Fifth Option',
        id: 5
      },
      {
        name: 'Sixth Option',
        id: 6
      },
      {
        name: 'Seventh Option',
        id: 7
      },
      {
        name: 'Eighth Option',
        id: 8
      },
      {
        name: 'Ninth Option',
        id: 9
      }
    ];
    this.shortArray = this.longArray.slice(0, 4);

    this.dropdownOptions = this.longArray;
  }

  valueChanged() {
    console.info('value changed!');
  };

  switchArray() {
    this.dropdownOptions = (this.dropdownOptions.length === 4) ? this.longArray : this.shortArray;
    this.dropdownValue = null;
  };

}

export default controller;