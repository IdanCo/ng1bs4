(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("library", [], factory);
	else if(typeof exports === 'object')
		exports["library"] = factory();
	else
		root["library"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dropdown = __webpack_require__(3);

var _dropdown2 = _interopRequireDefault(_dropdown);

__webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Register module, register component and export name
// Import Resources
exports.default = angular.module('ng1bs4.library.dropdown', []).component('ngbsDropdown', _dropdown2.default).name;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _tabs = __webpack_require__(6);

var _tabs2 = _interopRequireDefault(_tabs);

var _pane = __webpack_require__(5);

var _pane2 = _interopRequireDefault(_pane);

__webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Register module, register component and export name
exports.default = angular.module('ng1bs4.library.tabs', []).component('ngbsTabs', _tabs2.default).component('ngbsPane', _pane2.default).name; // Import Resources

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Import Template


var _dropdown = __webpack_require__(9);

var _dropdown2 = _interopRequireDefault(_dropdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Set up controller
var controller = function () {
  function controller($element, $timeout) {
    _classCallCheck(this, controller);

    this.$element = $element;
    this.$timeout = $timeout;
  }

  _createClass(controller, [{
    key: '$onInit',
    value: function $onInit() {
      var _this = this;

      // Set a default DISPLAY property if none was supplied
      this.dropdownDisplayProperty = this.dropdownDisplayProperty || 'display';
      // Set a default KEY property if none was supplied
      this.dropdownKeyProperty = this.dropdownKeyProperty || 'id';
      // Set a default drop direction if none was supplied
      this.dropdownDirection = this.dropdownDirection || 'down';
      // Initialize search query
      this.dropdownQuery = '';

      // Set drop direction
      this.$element.addClass('drop' + this.dropdownDirection);

      // Tell component how to handle changes in ng-model
      this.ngModel.$render = function () {
        if (!!_this.ngModel.$modelValue) {
          _this.displayValue = _this.dropdownOptions.find(_this.isSelected, _this)[_this.dropdownDisplayProperty];
        }
      };

      // Initialize option list
      this.filterOptions();

      // On open, set focus on search field
      this.$element.on('shown.bs.dropdown', function () {
        _this.$element.find('.dropdown-header input').focus();
      });
    }
  }, {
    key: '$onChanges',
    value: function $onChanges(changesObj) {
      // when external option list is updated, reset internal list
      if (!changesObj.dropdownOptions.isFirstChange()) {
        this.dropdownQuery = '';
        this.filteredOptions = this.dropdownOptions;
      }
    }
  }, {
    key: 'setValue',
    value: function setValue(value) {
      var newValue = value[this.dropdownKeyProperty];

      this.ngModel.$setViewValue(newValue);
      this.ngModel.$render();
    }
  }, {
    key: 'filterOptions',
    value: function filterOptions() {
      var _this2 = this;

      this.filteredOptions = this.dropdownOptions.filter(function (option) {
        return option[_this2.dropdownDisplayProperty].toLowerCase().indexOf(_this2.dropdownQuery.toLowerCase()) !== -1;
      });
    }
  }, {
    key: 'isSelected',
    value: function isSelected(option) {
      return option[this.dropdownKeyProperty] === this.ngModel.$modelValue;
    }
  }]);

  return controller;
}();

// Define and export component


exports.default = {
  bindings: {
    dropdownPlaceholder: '@',
    dropdownDisplayProperty: '@',
    dropdownKeyProperty: '@',
    dropdownOptions: '<',
    dropdownDirection: '<',
    dropdownEnableSearch: '<'
  },
  require: {
    ngModel: 'ngModel'
  },
  template: _dropdown2.default,
  controller: controller
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(2);

var _dropdown = __webpack_require__(0);

var _dropdown2 = _interopRequireDefault(_dropdown);

var _tabs = __webpack_require__(1);

var _tabs2 = _interopRequireDefault(_tabs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Register module, inject components and export name


// Component Modules
exports.default = angular.module('ng1bs4.library', [_dropdown2.default, _tabs2.default]).name; // Main entry point for library
// Here all library resources are imported, and all component modules are injected

// General Styling

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Import Template


var _pane = __webpack_require__(10);

var _pane2 = _interopRequireDefault(_pane);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var controller = function () {
  function controller() {
    _classCallCheck(this, controller);
  }

  _createClass(controller, [{
    key: '$onInit',
    value: function $onInit() {
      this.tabsCtrl.addPane(this);
    }
  }]);

  return controller;
}();

// Define and export component


exports.default = {
  transclude: true,
  require: {
    tabsCtrl: '^ngbsTabs'
  },
  bindings: {
    title: '@'
  },
  template: _pane2.default,
  controller: controller
};
//
// function controller() {
//   const vm = this;
//   vm.$onInit = function() {
//     console.info('adding', this);
//     vm.tabsCtrl.addPane(this);
//   };
// }

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Import Template


var _tabs = __webpack_require__(11);

var _tabs2 = _interopRequireDefault(_tabs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var controller = function () {
  function controller() {
    _classCallCheck(this, controller);

    this.panes = [];
  }

  _createClass(controller, [{
    key: 'select',
    value: function select(pane) {
      angular.forEach(this.panes, function (pane) {
        pane.selected = false;
      });
      pane.selected = true;
    }
  }, {
    key: 'addPane',
    value: function addPane(pane) {
      if (this.panes.length === 0) {
        this.select(pane);
      }
      this.panes.push(pane);
    }
  }]);

  return controller;
}();
// Define and export component


exports.default = {
  transclude: true,
  template: _tabs2.default,
  controller: controller
};

/***/ }),
/* 7 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 8 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = "<button type=\"button\" data-toggle=\"dropdown\" class=\"dropdown-toggle btn btn-secondary\">\n    <span ng-show=\"!$ctrl.displayValue\" class=\"placeholder\">{{ ::$ctrl.dropdownPlaceholder }}</span>\n    <span ng-show=\"!!$ctrl.displayValue\" ng-bind-html=\"$ctrl.displayValue\" class=\"value\"></span>\n</button>\n\n<div class=\"dropdown-menu\">\n    <div ng-show=\"$ctrl.dropdownEnableSearch\" class=\"dropdown-header\">\n        <input type=\"text\" placeholder=\"Search...\" ng-model=\"$ctrl.dropdownQuery\" ng-change=\"$ctrl.filterOptions()\" class=\"form-control\"/>\n        <!--<i ng-click=\"vm.clickClearSearch($event)\" ng-show=\"vm.dropdownQuery\" class=\"input-suffix bp-icon-remove\"></i>-->\n    </div>\n    <div class=\"dropdown-menu-inner\">\n        <a ng-repeat=\"option in $ctrl.filteredOptions\" ng-click=\"$ctrl.setValue(option)\" ng-class=\"{ 'selected': $ctrl.isSelected(option) }\" href=\"\" ng-bind-html=\"option[$ctrl.dropdownDisplayProperty]\" class=\"dropdown-item\"></a>\n        <a ng-if=\"!$ctrl.filteredOptions.length\" class=\"dropdown-item\">No results found...</a></div>\n</div>";

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = "<div ng-class=\"{active:$ctrl.selected}\" ng-transclude=\"\" class=\"tab-pane\"></div>";

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav nav-tabs\">\n    <li ng-repeat=\"pane in $ctrl.panes\" class=\"nav-item\"><a href=\"\" ng-click=\"$ctrl.select(pane)\" ng-class=\"{active:pane.selected}\" class=\"nav-link\">{{pane.title}}</a></li>\n</ul>\n<div ng-transclude=\"\" class=\"tab-content\"></div>";

/***/ })
/******/ ]);
});