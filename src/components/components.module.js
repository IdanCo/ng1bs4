// import all components' modules
import MainModule from './main/main.module';

// Register module, inject components and export name
export default angular
  .module('app.components', [
    MainModule,
  ])
  .name;
