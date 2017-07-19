const DEFAULT_CONTENT = 'Please provide tooltip content';
const DEFAULT_TRIGGER = 'hover focus';
const DEFAULT_PLACEMENT = 'bottom';

const TooltipDirective = ($compile, $timeout) => ({
    restrict: 'A',
    scope: {
        bpTooltipContent: '@',
        bpTooltipPlacement: '@',
        bpTooltipTriger: '@'
    },

    link: function($scope, $element, $attrs) {
        // set a base object for tooltip options
        let options = {
            trigger: $scope.bpTooltipTriger || DEFAULT_TRIGGER,
            animation: true,
            html: true,
            title: $scope.bpTooltipContent || DEFAULT_CONTENT,
            placement: $scope.bpTooltipPlacement || DEFAULT_PLACEMENT,
            delay: { "show": 200, "hide": 0 },
        };

        initTooltip();

        function initTooltip() {
            $element.removeAttr('ngbs-tooltip');
            $element.tooltip(options);
        }

    }
});

export default TooltipDirective;