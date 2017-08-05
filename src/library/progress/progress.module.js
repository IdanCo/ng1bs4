// Import Resources
import component from './progress.component';
import './progress.scss';

// Register module, register component and export name
export default angular
  .module('ng1bs4.library.progress', [])
  .component('ngbsProgress', component)
  .name;
