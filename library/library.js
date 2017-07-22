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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _menu = __webpack_require__(7);

var _menu2 = _interopRequireDefault(_menu);

__webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Register module, register component and export name
// Import Resources
exports.default = angular.module('ng1bs4.library.menu', []).component('ngbsMenu', _menu2.default).name;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _select = __webpack_require__(8);

var _select2 = _interopRequireDefault(_select);

__webpack_require__(14);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Register module, register component and export name
// Import Resources
exports.default = angular.module('ng1bs4.library.select', []).component('ngbsSelect', _select2.default).name;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _tabs = __webpack_require__(10);

var _tabs2 = _interopRequireDefault(_tabs);

var _pane = __webpack_require__(9);

var _pane2 = _interopRequireDefault(_pane);

__webpack_require__(15);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Register module, register component and export name
exports.default = angular.module('ng1bs4.library.tabs', []).component('ngbsTabs', _tabs2.default).component('ngbsPane', _pane2.default).name; // Import Resources

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _test = __webpack_require__(11);

var _test2 = _interopRequireDefault(_test);

__webpack_require__(16);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Register module, register component and export name
// Import Resources
exports.default = angular.module('ng1bs4.library.test', []).component('ngbsTest', _test2.default).name;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _tooltip = __webpack_require__(12);

var _tooltip2 = _interopRequireDefault(_tooltip);

__webpack_require__(17);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Register module, register component and export name
// Import Resources
exports.default = angular.module('ng1bs4.library.tooltip', []).directive('ngbsTooltip', _tooltip2.default).name;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

__webpack_require__(5);

var _test = __webpack_require__(3);

var _test2 = _interopRequireDefault(_test);

var _select = __webpack_require__(1);

var _select2 = _interopRequireDefault(_select);

var _tabs = __webpack_require__(2);

var _tabs2 = _interopRequireDefault(_tabs);

var _menu = __webpack_require__(0);

var _menu2 = _interopRequireDefault(_menu);

var _tooltip = __webpack_require__(4);

var _tooltip2 = _interopRequireDefault(_tooltip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Register module, inject components and export name
// Main entry point for library
// Here all library resources are imported, and all component modules are injected

// General Styling
exports.default = angular.module('ng1bs4.library', [_test2.default, _select2.default, _tabs2.default, _menu2.default, _tooltip2.default]).name;

// Component Modules

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Import Template


var _menu = __webpack_require__(18);

var _menu2 = _interopRequireDefault(_menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DEFAULT_MENU_DISPLAY = 'Chose an action';
var DEFAULT_MENU_ACTIONS = [{ display: "action1", action: function action() {
    return alert("action1");
  } }, { display: "action2", action: function action() {
    return alert("action2");
  } }];

// Set up controller

var controller = function () {
  function controller($element) {
    _classCallCheck(this, controller);

    this.$element = $element;
  }

  _createClass(controller, [{
    key: '$onInit',
    value: function $onInit() {
      this.menuDisplay = this.menuDisplay || DEFAULT_MENU_DISPLAY;
      this.menuActions = this.menuActions || DEFAULT_MENU_ACTIONS;
    }
  }]);

  return controller;
}();

// Define and export component


exports.default = {
  bindings: {
    menuDisplay: '@',
    menuActions: '<'
  },
  template: _menu2.default,
  controller: controller
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Import Template


var _select = __webpack_require__(19);

var _select2 = _interopRequireDefault(_select);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DEFAULT_DISPLAY_PROPERTY = 'display';
var DEFAULT_KEY_PROPERTY = 'id';
var DEFAULT_DIRECTION = 'down';
var DEFAULT_PLACEHOLDER = 'Select an option...';

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

      // Set defaults
      this.selectDisplayProperty = this.selectDisplayProperty || DEFAULT_DISPLAY_PROPERTY;
      this.selectKeyProperty = this.selectKeyProperty || DEFAULT_KEY_PROPERTY;
      this.selectDirection = this.selectDirection || DEFAULT_DIRECTION;
      this.selectPlaceholder = this.selectPlaceholder || DEFAULT_PLACEHOLDER;
      this.selectQuery = '';

      // Set drop direction
      this.$element.addClass('drop' + this.selectDirection);

      // Tell component how to handle changes in ng-model
      this.ngModel.$render = function () {
        if (!!_this.ngModel.$modelValue) {
          _this.displayValue = _this.selectOptions.find(_this.isSelected, _this)[_this.selectDisplayProperty];
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
      if (!changesObj.selectOptions.isFirstChange()) {
        this.selectQuery = '';
        this.filteredOptions = this.selectOptions;
      }
    }
  }, {
    key: 'setValue',
    value: function setValue(value) {
      var newValue = value[this.selectKeyProperty];

      this.ngModel.$setViewValue(newValue);
      this.ngModel.$render();
    }
  }, {
    key: 'filterOptions',
    value: function filterOptions() {
      var _this2 = this;

      this.filteredOptions = this.selectOptions.filter(function (option) {
        return option[_this2.selectDisplayProperty].toLowerCase().indexOf(_this2.selectQuery.toLowerCase()) !== -1;
      });
    }
  }, {
    key: 'isSelected',
    value: function isSelected(option) {
      return option[this.selectKeyProperty] === this.ngModel.$modelValue;
    }
  }]);

  return controller;
}();

// Define and export component


exports.default = {
  bindings: {
    selectPlaceholder: '@',
    selectDisplayProperty: '@',
    selectKeyProperty: '@',
    selectOptions: '<',
    selectDirection: '<',
    selectEnableSearch: '<'
  },
  require: {
    ngModel: 'ngModel'
  },
  template: _select2.default,
  controller: controller
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Import Template


var _pane = __webpack_require__(20);

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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Import Template


var _tabs = __webpack_require__(21);

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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _test = __webpack_require__(22);

var _test2 = _interopRequireDefault(_test);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // Import Template


var controller = function controller() {
  _classCallCheck(this, controller);

  this.text = 'ng1bs4 is working!';
};
// Define and export component


exports.default = {
  template: _test2.default,
  controller: controller
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var DEFAULT_CONTENT = 'Please provide tooltip content';
var DEFAULT_TRIGGER = 'hover focus';
var DEFAULT_PLACEMENT = 'bottom';

var TooltipDirective = function TooltipDirective($compile, $timeout) {
    return {
        restrict: 'A',
        scope: {
            tooltipContent: '@',
            tooltipPlacement: '@',
            tooltipTrigger: '@'
        },

        link: function link($scope, $element, $attrs) {
            // set a base object for tooltip options
            var options = {
                trigger: $scope.tooltipTrigger || DEFAULT_TRIGGER,
                animation: true,
                html: true,
                title: $scope.tooltipContent || DEFAULT_CONTENT,
                placement: $scope.tooltipPlacement || DEFAULT_PLACEMENT,
                delay: { "show": 200, "hide": 0 }
            };

            initTooltip();

            function initTooltip() {
                $element.removeAttr('ngbs-tooltip');
                $element.tooltip(options);
            }
        }
    };
};

exports.default = TooltipDirective;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 14 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 15 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 16 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 17 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = "<div class=\"dropdown\">\n    <button type=\"button\" data-toggle=\"dropdown\" class=\"btn btn-secondary dropdown-toggle\" aria-haspopup=\"true\" aria-expanded=\"false\">\n        <span class=\"placeholder\">{{ ::$ctrl.menuDisplay }}</span>\n    </button>\n\n    <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n        <a class=\"dropdown-item\"\n           ng-repeat=\"menuAction in $ctrl.menuActions\"\n           ng-bind-html=\"menuAction.display\"\n           ng-click=\"menuAction.action()\">\n        </a>\n    </div>\n</div>\n";

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = "<button type=\"button\" data-toggle=\"dropdown\" class=\"dropdown-toggle btn btn-secondary\">\n    <span ng-show=\"!$ctrl.displayValue\" class=\"placeholder\">{{ ::$ctrl.selectPlaceholder }}</span>\n    <span ng-show=\"!!$ctrl.displayValue\" ng-bind-html=\"$ctrl.displayValue\" class=\"value\"></span>\n</button>\n\n<div class=\"dropdown-menu\">\n    <div ng-show=\"$ctrl.selectEnableSearch\" class=\"dropdown-header\">\n        <input type=\"text\" placeholder=\"Search...\" ng-model=\"$ctrl.selectQuery\" ng-change=\"$ctrl.filterOptions()\" class=\"form-control\"/>\n    </div>\n    <div class=\"dropdown-menu-inner\">\n        <a ng-repeat=\"option in $ctrl.filteredOptions\" ng-click=\"$ctrl.setValue(option)\" ng-class=\"{ 'selected': $ctrl.isSelected(option) }\" href=\"\" ng-bind-html=\"option[$ctrl.selectDisplayProperty]\" class=\"dropdown-item\"></a>\n        <a ng-if=\"!$ctrl.filteredOptions.length\" class=\"dropdown-item\">No results found...</a></div>\n</div>";

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = "<div ng-class=\"{active:$ctrl.selected}\" ng-transclude=\"\" class=\"tab-pane\"></div>";

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav nav-tabs\">\n    <li ng-repeat=\"pane in $ctrl.panes\" class=\"nav-item\"><a href=\"\" ng-click=\"$ctrl.select(pane)\" ng-class=\"{active:pane.selected}\" class=\"nav-link\">{{pane.title}}</a></li>\n</ul>\n<div ng-transclude=\"\" class=\"tab-content\"></div>";

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = "<div>{{ $ctrl.text }}</div>\n<div class=\"css-test\" style=\"color:red\">But you forgot to load css!</div>";

/***/ })
/******/ ]);
});