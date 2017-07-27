## $ngbsModal

This injectable service will help you create and handle bootstrap's modals.

### openPrompt(*options*)

A method to create prompt modals. accepts an options object which should include the following properties:
 
**title** (*string*, optional) - The title which appears in the modal header.

**body** (*string*, optional) - The modal's body text.

**buttons** (*array*, optional) - An array of objects, each object represents a button and should include two properties: **name** (*string*) which appears on the button; **type** (*string*) which sets the button's style as [offered by bootstrap](http://v4-alpha.getbootstrap.com/components/buttons/#examples) 