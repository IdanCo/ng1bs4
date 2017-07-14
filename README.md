# ng1bs4
## A Library of AngularJS Components Implementing Boostrap 4
### _Tomorrow's Library with Yesterday's Framework_

Just because you use AngularJS and not Angular like all
the cool kids, does'nt mean you can't look good!
Enjoy the robust styling architecture of
the new [Bootstrap 4](http://v4-alpha.getbootstrap.com/),
while still using good ol' [AngularJS](https://angularjs.org/).

See it in action - https://idanco.github.io/ng1bs4/

## Alternatives
* Still used to bootstrap 3.x? Use [UI Bootstrap](https://angular-ui.github.io/bootstrap/)
* Finally upgraded to Angular? Use [NG Bootstrap](https://ng-bootstrap.github.io/#/home)
* None of the above? You belong with us!

## Intsall

install ng1bs4:

```sh
npm install ng1bs4 --save
```
import ng1bs4 module and styling into your project:
```js
import ng1bs4 from 'ng1bs4';
import 'ng1bs4/library/library.css'
```
inject ng1bs4 module into your app:
```js
angular
  .module('myApp', [
    ...,
    ng1bs4
  ]);
```
test by adding this directive anywhere in your markup
```html
<ngbs-test></ngbs-test>
```
## Philosophy
**No Styling**

We believe you should be able to customize as much as you want, and with bootstrap 4 theming is easy! That is why all components include minimal styling, and rely heavily on bootstrap's variables.

**Simple Code**

We strive to keep all components as simple yet robust as possible. Hence, rewiring them to fit your need should be easy as pie.

## Contribute
§!@#$%^ **HELP NEEDED!** ^%$#@!§

We're a brand new library, trying to make its way in this crazy javascript world. There's tons of work to be done and any effort will be appreciated. We need your help in -
- Building new components and imporving existing ones
- Coming up with ideas for new components or new features
- Documentation
- Stack, build, deploy and all that jazz
- Staring, sharing, forking and most of all - using
- Testing (unit, integration and pregnancy)
- Setting up coding standards and linting
