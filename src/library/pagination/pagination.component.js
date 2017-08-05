// Import Template
import template from './pagination.html';

class controller {
  constructor($log) {
    Object.assign(this, {
      $log,
    });

    this.pages = [];
    this.totalPages = [];
  }

  $onChanges() {
    // provide defaults for when bad or no data is provided
    this.currentPage = this.currentPage || 1;
    this.size = this.size || '';
    this.visiblePageBuffer = this.visiblePageBuffer || this.visiblePageBuffer === 0 ? this.visiblePageBuffer : 3;

    // (re)validate bindings
    if (typeof this.currentPage !== 'number' || isFinite(this.currentPage) === false) {
      this.$log.error('invalid ngbsPagination::currentPage:', JSON.stringify(this.currentPage), 'expecting a number');
    }

    if (typeof this.itemsPerPage !== 'number' || isFinite(this.itemsPerPage) === false) {
      this.$log.error('invalid ngbsPagination::itemsPerPage:', JSON.stringify(this.itemsPerPage), 'expecting a number');
    }

    if (this.size && (typeof this.size !== 'string' || ['', 'lg', 'sm'].includes(this.size) === false)) {
      this.$log.error('invalid ngbsPagination::size:', JSON.stringify(this.size), 'expecting "sm" or "lg"');
    }

    if (typeof this.totalItems !== 'number' || isFinite(this.totalItems) === false) {
      this.$log.error('invalid ngbsPagination::totalItems:', JSON.stringify(this.totalItems), 'expecting a number');
    }

    if (typeof this.visiblePageBuffer !== 'number' || isFinite(this.visiblePageBuffer) === false) {
      this.$log.error('invalid ngbsPagination::visiblePageBuffer:', JSON.stringify(this.visiblePageBuffer), 'expecting a number');
    }

    // build pages array
    this.buildPages();
  }

  buildPages() {
    // determine the number of pages
    this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);

    // determine where we start and stop the display
    let startAt = this.currentPage - this.visiblePageBuffer;
    let stopAt = this.currentPage + this.visiblePageBuffer;

    // if we're not towards the beginning (and ellipsis won't be shown), we need to take into account some padding
    if (startAt <= 0) {
      stopAt += Math.abs(startAt - 1);
      startAt += Math.abs(startAt - 1);
    }

    // if we're not towards the end (and ellipsis won't be shown), we need to take into account some padding
    if (stopAt > this.totalPages) {
      startAt -= (stopAt - this.totalPages);
      stopAt -= (stopAt - this.totalPages);
    }

    // pad more if "..." isn't visible or this.totalPages has not been displayed for us
    if (stopAt >= this.totalPages - 1) {
      startAt--;
    }

    if (stopAt == this.totalPages) {
      startAt--;
    }

    // pad more if "..." isn't visible or "1" has not been displayed for us
    if (startAt == 1) {
      stopAt++;
    }

    if (startAt <= 2) {
      stopAt++;
    }

    // clean up any bad maths
    if (startAt <= 0) {
      startAt = 1;
    }

    if (stopAt > this.totalPages) {
      stopAt = this.totalPages;
    }

    this.pages = [];

    // ensure the first page is displayed
    if (startAt !== 1) {
      this.pages.push({
        page: 1,
        display: 1
      });
    }

    // display a separator if need be
    if (startAt > 2) {
      this.pages.push({
        page: startAt - 1,
        display: '...',
      });
    }

    for (let i = startAt; i <= stopAt; i++) {
      this.pages.push({
        page: i,
        display: i,
      });
    }

    // display a separator if need be
    if (stopAt < this.totalPages - 1) {
      this.pages.push({
        page: stopAt + 1,
        display: '...',
      });
    }

    // ensure the last page is displayed
    if (stopAt != this.totalPages) {
      this.pages.push({
        page: this.totalPages,
        display: this.totalPages,
      });
    }
  }

  onNextClick() {
    this.raiseOnPageChange(this.currentPage + 1);
  }

  onPageClick(page) {
    this.raiseOnPageChange(page);
  }

  onPreviousClick() {
    this.raiseOnPageChange(this.currentPage - 1);
  }

  raiseOnPageChange(page) {
    if (this.currentPage !== page) {
      this.currentPage = page;
      this.onPageChange({
        currentPage: this.currentPage
      });

      // $onChanges won't pick up the change to currentPage, so we call this manually
      this.buildPages();
    }
  }
}

// Define and export component
export default {
  bindings: {
    currentPage: '<',
    disabled: '<',
    itemsPerPage: '<',
    onPageChange: '&',
    size: '@',
    totalItems: '<',
    visiblePageBuffer: '<',
  },
  template,
  controller
};
