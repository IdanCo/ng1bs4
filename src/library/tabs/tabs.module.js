// Import Resources
import TabsComponent from './tabs.component';
import PaneComponent from './pane.component';
import './tabs.scss';

// Register module, register component and export name
export default angular
  .module('ng1bs4.library.tabs', [])
  .component('ngbsTabs', TabsComponent)
  .component('ngbsPane', PaneComponent)
  .name;
