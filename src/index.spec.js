import angular from 'angular';
import 'angular-mocks';

const context = require.context('./', true, /\.(spec.js)$/);
context.keys().forEach(context);
