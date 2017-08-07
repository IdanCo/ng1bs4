// Import Resources
import component from './<%- componentName %>.component';
import './<%- componentName %>.scss';

// Register module, register component and export name
export default angular
  .module('ng1bs4.library.<%- camelName %>', [])
  .component('ngbs<%- capitalName %>', component)
  .name;
