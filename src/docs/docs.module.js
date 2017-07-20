// Showcase to display the library components

// Resources
import Docs from './docs.component';
import './docs.scss';

// Utilities
import Prism from './utils/prism/prism.module';
import Demo from './utils/demo/demo.module';

// Demos
import DropdownDemo from './components/dropdown/dropdown.module';
import TabsDemo from './components/tabs/tabs.module';
import MenuDemo from './components/menu/menu.module';
import TooltipDemo from './components/tooltip/tooltip.module';

// Register module, define components, configure routes and export name
export default angular
    .module('ng1bs4.docs', [
        Prism,
        Demo,
        DropdownDemo,
        TabsDemo,
        MenuDemo,
        TooltipDemo
    ])
    .component('docs', Docs)
    .name;