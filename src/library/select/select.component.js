// Import Template
import template from './select.html';

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
    this.selectDisplayProperty = this.selectDisplayProperty || DEFAULT_DISPLAY_PROPERTY;
    this.selectKeyProperty = this.selectKeyProperty || DEFAULT_KEY_PROPERTY;
    this.selectDirection = this.selectDirection || DEFAULT_DIRECTION;
    this.selectPlaceholder = this.selectPlaceholder || DEFAULT_PLACEHOLDER;
    this.selectQuery = '';

    // Set drop direction
    this.$element.addClass('drop' + this.selectDirection);

    // Tell component how to handle changes in ng-model
    this.ngModel.$render = () => {
      if (this.ngModel.$modelValue) {
        this.displayValue = this.selectOptions.find(this.isSelected, this)[this.selectDisplayProperty];
      }
    };

    // Initialize option list
    this.filterOptions();

    // On open, set focus on search field
    this.$element.on('shown.bs.dropdown', () => {
      this.$element.find('.dropdown-header input').focus();
    });
  }

  $onChanges(changesObj) {
    // when external option list is updated, reset internal list
    if (!changesObj.selectOptions.isFirstChange()) {
      this.selectQuery = '';
      this.filteredOptions = this.selectOptions;
    }
  }

  setValue(value) {
    let newValue = value[this.selectKeyProperty];

    this.ngModel.$setViewValue(newValue);
    this.ngModel.$render();
  }

  filterOptions() {
    this.filteredOptions = this.selectOptions.filter((option) =>
      option[this.selectDisplayProperty].toLowerCase().indexOf(this.selectQuery.toLowerCase()) !== -1
    );
  }

  isSelected(option) {
    return option[this.selectKeyProperty] === this.ngModel.$modelValue;
  }
}

// Define and export component
export default {
  bindings: {
    selectPlaceholder: '@',
    selectDisplayProperty: '@',
    selectKeyProperty: '@',
    selectOptions: '<',
    selectDirection: '<',
    selectEnableSearch: '<'
  },
  require: {
    ngModel: 'ngModel'
  },
  template,
  controller
};
