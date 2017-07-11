// Import Resources
import component from './demo.component';

// Register module, register component and export name
export default angular
  .module('ng1bs4.docs.demo', [])
  .component('demo', component)
  .name;
