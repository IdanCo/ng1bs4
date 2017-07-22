// Import Resources
import directive from './tooltip.directive';
import './tooltip.scss';

// Register module, register component and export name
export default angular
  .module('ng1bs4.library.tooltip', [])
  .directive('ngbsTooltip', directive)
  .name;
