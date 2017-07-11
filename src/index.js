// Entry point for entire app

// Frameworks
import angular from 'angular';
import ngSanitize from 'angular-sanitize';
import 'bootstrap';

// Internal Modules
import LibraryModule from './library/library.module';
import DocsModule from './docs/docs.module';

// Styling
import './index.scss';

// Register app
angular
  .module('app', [
    ngSanitize,
    LibraryModule,
    DocsModule
  ]);