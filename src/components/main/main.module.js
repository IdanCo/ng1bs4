// Import Resources
import MainComponent from './main.component';

// import module's specific styling
import './main.scss';

// Register module, register component and export name
export default angular
  .module('app.components.main', [])
  .component('main', MainComponent)
  .name;
