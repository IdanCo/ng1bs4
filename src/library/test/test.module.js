// Import Resources
import Component from './test.component';
import './test.scss';

// Register module, register component and export name
export default angular
  .module('ng1bs4.library.test', [])
  .component('ngbsTest', Component)
  .name;
