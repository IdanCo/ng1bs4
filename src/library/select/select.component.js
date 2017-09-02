// Import Template
import template from './select.html';

const DEFAULT_DISPLAY_PROPERTY = 'display';
const DEFAULT_KEY_PROPERTY = 'id';
const DEFAULT_DIRECTION = 'down';
const DEFAULT_PLACEHOLDER = 'Select an option...';

// Set up controller
class controller {
  constructor($document, $element, $scope, $timeout) {
    Object.assign(this, { $document, $element, $scope, $timeout });
  }

  $onInit() {
    // Set defaults
    this.selectDisplayProperty = this.selectDisplayProperty || DEFAULT_DISPLAY_PROPERTY;
    this.selectKeyProperty = this.selectKeyProperty || DEFAULT_KEY_PROPERTY;
    this.selectDirection = this.selectDirection || DEFAULT_DIRECTION;
    this.selectPlaceholder = this.selectPlaceholder || DEFAULT_PLACEHOLDER;
    this.selectQuery = '';
    this.visible = false;
    this.dropdownButtonElement = this.$element[0].querySelector('button.dropdown-toggle');
    this.dropdownMenuElement = this.$element[0].querySelector('.dropdown-menu');
    this.boundOnDocumentClick = this.onDocumentClick.bind(this); // necessary for unsubscribing

    // Tell component how to handle changes in ng-model
    this.ngModel.$render = () => {
      if (this.ngModel.$modelValue) {
        this.displayValue = this.selectOptions.find(this.isSelected, this)[this.selectDisplayProperty];
      }
    };

    // Initialize option list
    this.filterOptions();
  }

  $onChanges(changesObj) {
    // when external option list is updated, reset internal list
    if (!changesObj.selectOptions.isFirstChange()) {
      this.selectQuery = '';
      this.filteredOptions = this.selectOptions;
    }
  }

  monitorDocumentClick(start) {
    const bindFn = this.$document[0][start === true ? 'addEventListener' : 'removeEventListener'];
    bindFn('click', this.boundOnDocumentClick);
  }

  onDocumentClick() {
    // close the dropdown since they clicked outside of it
    this.$scope.$apply(() => { this.close(); });
  }

  open() {
    if (this.visible === false) {
      // display the dropdown
      this.visible = true;

      // position the dropdown based on the configured direction
      const buttonHeight = this.dropdownButtonElement.clientHeight;
      const [bottom, top, transform] = (this.selectDirection === 'up') ? [0, 'inherit', -buttonHeight] : ['inherit', 0, buttonHeight];

      // bootstrap uses this css technique
      this.dropdownMenuElement.style.bottom = bottom;
      this.dropdownMenuElement.style.top = top;
      this.dropdownMenuElement.style.transform = `translate3d(0px, ${transform}px, 0px)`;

      this.$timeout(() => {
        // watch for document click, so we can close the dropdown
        this.monitorDocumentClick(true);

        // auto-focus on the search input if it's enabled
        if (this.selectEnableSearch === true) {
          this.$element[0].querySelector('input').focus();
        }
      });
    }
  }

  close() {
    // hide dropdown
    this.visible = false;

    // stop monitoring
    this.monitorDocumentClick(false);

    // reset filter
    this.selectQuery = '';
    this.filterOptions();
  }

  setValue(value) {
    // update the model
    this.ngModel.$setViewValue(value[this.selectKeyProperty]);
    this.ngModel.$render();

    // close the drop down
    this.close();
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
