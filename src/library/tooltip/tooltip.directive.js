const DEFAULT_CONTENT = 'Please provide tooltip content';
const DEFAULT_TRIGGER = 'hover focus';
const DEFAULT_PLACEMENT = 'bottom';

const TooltipDirective = () => ({
  restrict: 'A',
  scope: {
    tooltipContent: '@',
    tooltipPlacement: '@',
    tooltipTrigger: '@'
  },
  link: function($scope, $element) {
    // set a base object for tooltip options
    let options = {
      trigger: $scope.tooltipTrigger || DEFAULT_TRIGGER,
      animation: true,
      html: true,
      title: $scope.tooltipContent || DEFAULT_CONTENT,
      placement: $scope.tooltipPlacement || DEFAULT_PLACEMENT,
      delay: { 'show': 200, 'hide': 0 }
    };

    initTooltip();

    function initTooltip() {
      $element.removeAttr('ngbs-tooltip');
      $element.tooltip(options);
    }
  }
});

export default TooltipDirective;
