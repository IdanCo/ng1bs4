// Main entry point for library
// Here all library resources are imported, and all component modules are injected

// General Styling
import './library.scss';

// Component Modules
import TestModule from './test/test.module';
import SelectModule from './select/select.module';
import TabsModule from './tabs/tabs.module';
import MenuModule from './menu/menu.module';
import TooltipModule from './tooltip/tooltip.module';
import AlertModule from './alert/alert.module';
import ModalModule from './modal/modal.module';

// Register module, inject components and export name
export default angular
  .module('ng1bs4.library', [
    TestModule,
    SelectModule,
    TabsModule,
    MenuModule,
    TooltipModule,
    AlertModule,
    ModalModule
  ])
  .config(function ($qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
  })
  .name;
