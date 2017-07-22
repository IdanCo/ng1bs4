// import library (can't use npm because JADE is included only in custom build)
import Prism from './lib/prism.js';
import './lib/prism.css';
import './prism.scss';

// Register module, register directive and export name
export default angular
  .module('ng1bs4.docs.prism', [])
  .directive('prism', function() {
    return {
      restrict: 'A',
      link: function ($scope, element) {
        element.ready(function() {
          Prism.highlightElement(element[0]);
        });
      }
    };
  })
  .name;
