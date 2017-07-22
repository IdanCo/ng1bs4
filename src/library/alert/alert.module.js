// Import Resources
import AlertComponent from './alert.component';
import './alert.scss';

// Register module, register component and export name
export default angular
  .module('ng1bs4.library.alert', [])
  .component('ngbsAlert', AlertComponent)
  .name;
