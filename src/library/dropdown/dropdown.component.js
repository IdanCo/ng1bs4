// Import Template
import DropdownTemplate from './dropdown.html';


// Set up controller
class DropdownController {

  constructor($element, $timeout) {
    this.$element = $element;
    this.$timeout = $timeout;
  }

  $onInit() {
    // Set a default DISPLAY property if none was supplied
    this.dropdownDisplayProperty = this.dropdownDisplayProperty || 'display';
    // Set a default KEY property if none was supplied
    this.dropdownKeyProperty = this.dropdownKeyProperty || 'id';
    // Set a default drop direction if none was supplied
    this.dropdownDirection = this.dropdownDirection || 'down';
    // Initialize search query
    this.dropdownQuery = '';

    // Set drop direction
    this.$element.addClass('drop' + this.dropdownDirection);

    // Tell component how to handle changes in ng-model
    this.ngModel.$render = () => {
      if (!!this.ngModel.$modelValue) {
        this.displayValue = this.dropdownOptions.find(this.isSelected, this)[this.dropdownDisplayProperty]
      }
    };

    // Initialize option list
    this.filterOptions();

    // On open, set focus on search field
    this.$element.on('shown.bs.dropdown', () => {
      this.$element.find('.dropdown-header input').focus();
    });

  };

  $onChanges(changesObj) {
    // when external option list is updated, reset internal list
    if (!changesObj.dropdownOptions.isFirstChange()) {
      this.dropdownQuery = '';
      this.filteredOptions = this.dropdownOptions;
    }
  };

  setValue(value) {
    let newValue = value[this.dropdownKeyProperty];

    this.ngModel.$setViewValue(newValue);
    this.ngModel.$render();
  }

  filterOptions() {
    this.filteredOptions = this.dropdownOptions.filter((option) =>
      option[this.dropdownDisplayProperty].toLowerCase().indexOf(this.dropdownQuery.toLowerCase()) !== -1
    );
  }

  isSelected(option) {
    return option[this.dropdownKeyProperty] === this.ngModel.$modelValue;
  }

}

/*@ngInject*/

// Define and export component
export default {
  bindings: {
    dropdownPlaceholder: '@',
    dropdownDisplayProperty: '@',
    dropdownKeyProperty: '@',
    dropdownOptions: '<',
    dropdownDirection: '<',
    dropdownEnableSearch: '<',
  },
  require: {
    ngModel: 'ngModel',
  },
  template: DropdownTemplate,
  controller: DropdownController,
};
