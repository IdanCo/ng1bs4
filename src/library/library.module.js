// Main entry point for library
// Here all library resources are imported, and all component modules are injected

// General Styling
import './library.scss';

// Component Modules
import TestModule from './test/test.module';
import DropdownModule from './dropdown/dropdown.module';
import TabsModule from './tabs/tabs.module';
import TooltipModule from './tooltip/tooltip.module';

// Register module, inject components and export name
export default angular
    .module('ng1bs4.library', [
        TestModule,
        DropdownModule,
        TabsModule,
        TooltipModule

    ])
    .name;