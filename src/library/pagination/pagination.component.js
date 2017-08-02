// Import Template
import template from './pagination.html';

// TODO support sizes - .pagination-lg, .pagination-sm
// TODO support icons
// TODO support first/last, prev/next
// TODO support disabling prev/next/first/last
// TODO html with 2 space indentions
// TODO support disabled
// TODO support onPageChange
// TODO support max visible pages

class controller {
  constructor() {}

  $onInit() {
    this.currentPage = this.currentPage || 1;
  }
}

// Define and export component
export default {
  bindings: {
    currentPage: '<',
    itemsPerPage: '<',
    totalITems: '<',
    maxVisiblePages: '<',
    useIcons: '<',
    disabled: '<',
    onPageChange: '&',
  },
  transclude: true,
  template,
  controller
};
