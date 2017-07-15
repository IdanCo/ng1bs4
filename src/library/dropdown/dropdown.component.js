// Import Template
import template from './dropdown.html';

const DEFAULT_DISPLAY_PROPERTY = 'display';
const DEFAULT_KEY_PROPERTY = 'id';
const DEFAULT_DIRECTION = 'down';
const DEFAULT_PLACEHOLDER = 'Select an option...';

// Set up controller
class controller {

  constructor($element, $timeout) {
    this.$element = $element;
    this.$timeout = $timeout;
  }

  $onInit() {
    // Set defaults
    this.dropdownDisplayProperty = this.dropdownDisplayProperty || DEFAULT_DISPLAY_PROPERTY;
    this.dropdownKeyProperty = this.dropdownKeyProperty || DEFAULT_KEY_PROPERTY;
    this.dropdownDirection = this.dropdownDirection || DEFAULT_DIRECTION;
    this.dropdownPlaceholder = this.dropdownPlaceholder || DEFAULT_PLACEHOLDER;
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
  template,
  controller
};
