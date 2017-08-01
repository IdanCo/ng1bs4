// Entry point for entire app

// Frameworks
import angular from 'angular';
import 'bootstrap';

// Internal Modules
import LibraryModule from './library/library.module';
import DocsModule from './docs/docs.module';

// Styling
import './index.scss';

// Register app
angular
  .module('ng1bs4', [
    LibraryModule,
    DocsModule
  ]);
