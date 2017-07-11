// Import Resources
import DropdownComponent from './dropdown.component';
import './dropdown.scss'

// Register module, register component and export name
export default angular
  .module('ng1bs4.library.dropdown', [])
  .component('ngbsDropdown', DropdownComponent)
  .name;
