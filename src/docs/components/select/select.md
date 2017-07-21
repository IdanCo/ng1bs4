## ngbs-select

**select-options** (*array of objects*) - Each object in the array represents an option in the dropdown, and must include a display value (which appears in the dropdown options) and a key value (which is binded to the ng-model).

**select-placeholder** (*string*, optional) - The text which appears when no value is selected. Defaults to "Select an option..."

**select-display-property** (*string*, optional) - The name of the display value property in the option object. Defaults to 'display'

**select-key-property** (*string*, optional) - The name of the unique key property in the option object. The value of this field will be binded to 'ng-modal'. Defaults to 'id'

**select-direction** (*string*, optional) - accepted values are 'up' or 'down'. Defaults to 'down'.

**select-enable-search** (*boolean*, optional) - whether or not to show the search field at the top of the dropdown menu. Defaults to false.