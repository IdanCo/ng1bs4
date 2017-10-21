// Import Resources
import component from './select.component';
import ngSanitize from 'angular-sanitize';

import './select.scss';

// Register module, register component and export name
export default angular
  .module('ng1bs4.library.select', [ngSanitize])
  .component('ngbsSelect', component)
  .name;
