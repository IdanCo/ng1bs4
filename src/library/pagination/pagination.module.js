// Import Resources
import PaginationComponent from './pagination.component';
import './pagination.scss';

// Register module, register component and export name
export default angular
  .module('ng1bs4.library.pagination', [])
  .component('ngbsPagination', PaginationComponent)
  .name;
