// Showcase to display the library components

// External Resources
import 'ng-showdown';
import 'angular-highlightjs';
import 'highlight.js/styles/github.css';

// Local Resources
import Docs from './docs.component';
import './docs.scss';

// Demos
import Demo from './utils/demo/demo.module';
import SelectDemo from './demos/select/select-demo.module';
import TabsDemo from './demos/tabs/tabs-demo.module';
import MenuDemo from './demos/menu/menu-demo.module';
import TooltipDemo from './demos/tooltip/tooltip-demo.module';
import AlertDemo from './demos/alert/alert-demo.module';
import ModalDemo from './demos/modal/modal-demo.module';
import PaginationDemo from './demos/pagination/pagination-demo.module';
import ProgressDemo from './demos/progress/progress-demo.module';

// Register module, define components, configure routes and export name
export default angular
  .module('ng1bs4.docs', [
    'ng-showdown',
    'hljs',
    Demo,
    SelectDemo,
    TabsDemo,
    MenuDemo,
    TooltipDemo,
    AlertDemo,
    ModalDemo,
    PaginationDemo,
    ProgressDemo,
  ])
  .component('docs', Docs)
  .name;
