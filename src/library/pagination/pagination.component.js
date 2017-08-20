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
    this.paginationCurrentPage = this.paginationCurrentPage || 1;
    this.paginationSize = this.paginationSize || '';
    this.paginationVisiblePageBuffer = this.paginationVisiblePageBuffer || this.paginationVisiblePageBuffer === 0 ? this.paginationVisiblePageBuffer : 3;

    // (re)validate bindings
    if (typeof this.paginationCurrentPage !== 'number' || isFinite(this.paginationCurrentPage) === false) {
      this.$log.error('invalid ngbsPagination::paginationCurrentPage:', JSON.stringify(this.paginationCurrentPage), 'expecting a number');
    }

    if (typeof this.paginationItemsPerPage !== 'number' || isFinite(this.paginationItemsPerPage) === false) {
      this.$log.error('invalid ngbsPagination::paginationItemsPerPage:', JSON.stringify(this.paginationItemsPerPage), 'expecting a number');
    }

    if (this.paginationSize && (typeof this.paginationSize !== 'string' || ['', 'lg', 'sm'].includes(this.paginationSize) === false)) {
      this.$log.error('invalid ngbsPagination::paginationSize:', JSON.stringify(this.paginationSize), 'expecting "sm" or "lg"');
    }

    if (typeof this.paginationTotalItems !== 'number' || isFinite(this.paginationTotalItems) === false) {
      this.$log.error('invalid ngbsPagination::paginationTotalItems:', JSON.stringify(this.paginationTotalItems), 'expecting a number');
    }

    if (typeof this.paginationVisiblePageBuffer !== 'number' || isFinite(this.paginationVisiblePageBuffer) === false) {
      this.$log.error('invalid ngbsPagination::paginationVisiblePageBuffer:', JSON.stringify(this.paginationVisiblePageBuffer), 'expecting a number');
    }

    // build pages array
    this.buildPages();
  }

  buildPages() {
    // determine the number of pages
    this.totalPages = Math.ceil(this.paginationTotalItems / this.paginationItemsPerPage);

    // determine where we start and stop the display
    let startAt = this.paginationCurrentPage - this.paginationVisiblePageBuffer;
    let stopAt = this.paginationCurrentPage + this.paginationVisiblePageBuffer;

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
    this.raisePaginationOnPageChange(this.paginationCurrentPage + 1);
  }

  onPageClick(page) {
    this.raisePaginationOnPageChange(page);
  }

  onPreviousClick() {
    this.raisePaginationOnPageChange(this.paginationCurrentPage - 1);
  }

  raisePaginationOnPageChange(page) {
    if (this.paginationCurrentPage !== page) {
      this.paginationCurrentPage = page;
      this.paginationOnPageChange({
        paginationCurrentPage: this.paginationCurrentPage
      });

      // $onChanges won't pick up the change to paginationCurrentPage, so we call this manually
      this.buildPages();
    }
  }
}

// Define and export component
export default {
  bindings: {
    paginationCurrentPage: '<',
    paginationDisabled: '<',
    paginationItemsPerPage: '<',
    paginationOnPageChange: '&',
    paginationSize: '@',
    paginationTotalItems: '<',
    paginationVisiblePageBuffer: '<',
  },
  template,
  controller
};
