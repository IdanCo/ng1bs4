// Import Template
import MainTemplate from './main.html';
import library from '../../library';

// Set up controller
class MainController {
  constructor($element) {
    this.text = 'Angular ' + angular.version.full + ' is working!';
    this.$element = $element;
  }

  $onInit() {
    this.$element.find('.test-jquery').text('jQuery ' + $.fn.jquery + ' is working!');
    console.info(library(this.$element).doSomething());
  }
}

// annotate injections
MainController.$inject = ['$element'];

// Define and export component
export default {
  template: MainTemplate,
  controller: MainController
};
