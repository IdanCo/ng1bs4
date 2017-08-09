## ngbs-progress

This component merges the simplicity of HTML5's `<progress>` with the beauty of Bootstrap 4's Progress component. In addition to the attributes below, the component's `height` style can be set for a taller (or shorter) progress indicator.

**progress-max** (*number*, optional) - Represents how much of a particular task needs to be done before it is considered complete. If provided, the number must be greater than zero.

**progress-value** (*number*, optional) - Represents how much of a particular task has been done. If provided, the number must be greater than or equal to 0 and less than or equal to `progress-max`. This attribute is optional, which allows you to illustrate that a particular task is ongoing with no indication of how long it is expected to take.

**progress-animated-progress** (*boolean*, optional) - Whether or not changes to the `progress-value` should be animated. Defaults to `false`.

**progress-auto-label** (*boolean*, optional) - Automatically displays a label inside of the progress indicator (e.g.- 25%). You can also specify your own custom label via `innerHTML`. Defaults to `false`.

**progress-striped** (*boolean*, optional) - The display style of the progress indicator. Defaults to `false`.

**progress-animated-striped** (*boolean*, optional) - Used in conjunction with the `progress-striped` attribute. Defaults to `false`.

**progress-background** (*string*, optional) - This maps to Bootstrap 4's colors. Values can be `'primary'`, `'success'`, `'info'`, `'warning'`, `'danger'`, `'inverse'`, or `'faded'`. Defaults to `'primary'`.
