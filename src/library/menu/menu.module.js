// Import Resources
import MenuComponent from './menu.component';
import './menu.scss'

// Register module, register component and export name
export default angular
  .module('ng1bs4.library.menu', [])
  .component('ngbsMenu', MenuComponent)
  .name;
