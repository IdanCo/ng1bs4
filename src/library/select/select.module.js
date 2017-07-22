// Import Resources
import component from './select.component';
import './select.scss';

// Register module, register component and export name
export default angular
  .module('ng1bs4.library.select', [])
  .component('ngbsSelect', component)
  .name;
