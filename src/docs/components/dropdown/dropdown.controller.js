function controller() {
  const vm = this;
  const longArray = [
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
      name: 'Forth Option',
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
  const shortArray = longArray.slice(0, 4);

  vm.dropdownOptions = longArray;
  vm.dropdownValue = null;

  vm.valueChanged = function() {
    console.info('value changed!');
  };

  vm.switchArray = function () {
    if (this.dropdownOptions.length === 4) {
      this.dropdownOptions = longArray;
    } else {
      this.dropdownOptions = shortArray;
    }
    this.dropdownValue = null;
  };
}

export default controller;