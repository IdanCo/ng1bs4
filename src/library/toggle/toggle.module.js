// Import Resources
import component from './toggle.component';
import './toggle.scss';

// Register module, register component and export name
export default angular
  .module('ng1bs4.library.toggle', [])
  .component('ngbsToggle', component)
  .name;
