// Showcase to display the library components

// Resources
import Docs from './docs.component';
import './docs.scss';

// Utilities
import Prism from './utils/prism/prism.module';
import Demo from './utils/demo/demo.module';

// Demos
import SelectDemo from './demos/select/select-demo.module';
import TabsDemo from './demos/tabs/tabs-demo.module';
import MenuDemo from './demos/menu/menu-demo.module';
import TooltipDemo from './demos/tooltip/tooltip-demo.module';

// Register module, define components, configure routes and export name
export default angular
  .module('ng1bs4.docs', [
    Prism,
    Demo,
    SelectDemo,
    TabsDemo,
    MenuDemo,
    TooltipDemo
  ])
  .component('docs', Docs)
  .name;
