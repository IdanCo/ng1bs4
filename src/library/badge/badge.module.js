// Import Resources
import component from './badge.component';
import './badge.scss';

// Register module, register component and export name
export default angular
  .module('ng1bs4.library.badge', [])
  .component('ngbsBadge', component)
  .name;
