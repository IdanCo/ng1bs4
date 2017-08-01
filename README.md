[![Build Status](https://travis-ci.org/IdanCo/ng1bs4.svg?branch=master)](https://travis-ci.org/IdanCo/ng1bs4)
# ng1bs4
## A Library of AngularJS Components Implementing Boostrap 4
### _Tomorrow's Library with Yesterday's Framework_

Just because you use AngularJS and not Angular like all
the cool kids, does'nt mean you can't look good!

Enjoy the robust styling architecture of the new [Bootstrap 4](http://v4-alpha.getbootstrap.com/),
while still using good ol' [AngularJS](https://angularjs.org/).

See it in action at https://idanco.github.io/ng1bs4/.

## Alternatives

* Still used to Bootstrap 3.x? Use [UI Bootstrap](https://angular-ui.github.io/bootstrap/)
* Finally upgraded to Angular? Use [NG Bootstrap](https://ng-bootstrap.github.io/#/home)
* None of the above? You belong with us!

## Install

Install _ng1bs4_

```sh
npm install ng1bs4 --save
```

Import `ng1bs4` module and styling into your project

```js
import ng1bs4 from 'ng1bs4';
import 'ng1bs4/dist/import.css'
```

Inject `ng1bs4` module into your app

```js
angular
  .module('myApp', [
    ...,
    ng1bs4
  ]);
```

Test by adding this directive anywhere in your markup

```html
<ngbs-test></ngbs-test>
```

## Philosophy

**No Styling**. We believe you should be able to customize as much as you want, and with Bootstrap 4 theming is easy! That's why all components include minimal styling and rely heavily on Bootstrap's native classes and variables.

**Simple Code**. We strive to keep all components as simple yet robust as possible. Hence, rewiring them to fit your needs should be easy peasy.

## Contribute

§!@#$%^ **HELP NEEDED!** ^%$#@!§

We're a brand new open source project, trying to make our way in this crazy javascript world.
There's tons of work to be done and any effort will be appreciated. 

You can help by:
- Staring, sharing, forking, and most of all: using
- Documentation (create a pull request)
- Building new components (create a pull request)
- Imporving existing components (create a pull request)
- Coming up with ideas for new components or new features (open an issue)
- Testing - unit, integration, and pregnancy (create a pull request)
- Setting up coding standards and linting (create a pull request)
- Stack, build, deploy and all that jazz
