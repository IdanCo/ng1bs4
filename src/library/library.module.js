// Main entry point for library
// Here all library resources are imported, and all component modules are injected

// General Styling
import './library.scss';

// Component Modules
import DropdownModule from './dropdown/dropdown.module';
import TabsModule from './tabs/tabs.module';

// Register module, inject components and export name
export default angular
  .module('ng1bs4.library', [
    DropdownModule,
    TabsModule
  ])
  .name;
