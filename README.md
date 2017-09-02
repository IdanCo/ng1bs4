# ng1bs4
#### _Tomorrow's Library with Yesterday's Framework_
[![Gitter chat](https://badges.gitter.im/ng1bs4/native-navigation.svg)](https://gitter.im/ng1bs4)

[![Build Status](https://travis-ci.org/IdanCo/ng1bs4.svg?branch=master)](https://travis-ci.org/IdanCo/ng1bs4)
[![npm version](https://badge.fury.io/js/ng1bs4.svg)](https://badge.fury.io/js/ng1bs4)
## A Library of AngularJS Components Implementing Boostrap 4

Just because you use AngularJS and not Angular like all
the cool kids, doesn't mean you can't look good!

Enjoy the robust styling architecture of the new [Bootstrap 4](http://v4-alpha.getbootstrap.com/),
while still using good ol' [AngularJS](https://angularjs.org/).

See it in action at https://idanco.github.io/ng1bs4/.

## Alternatives

* Still used to Bootstrap 3.x? Use [UI Bootstrap](https://angular-ui.github.io/bootstrap/)
* Finally upgraded to Angular? Use [NG Bootstrap](https://ng-bootstrap.github.io/#/home)
* None of the above? You belong with us!

## Install

[Install bootstrap 4](https://getbootstrap.com/docs/4.0/getting-started/webpack/) and import it's JS and styling into your project.

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

for more details checkout a [sample project with angularJS, bootstrap4 and ng1bs4](https://github.com/IdanCo/webpack-modular/tree/ng1bs4).


## Philosophy

**No Styling**. We believe you should be able to customize as much as you want, and with Bootstrap 4 theming is easy! That's why all components include minimal styling and rely heavily on Bootstrap's native classes and variables.

**Simple Code**. We strive to keep all components as simple yet robust as possible. Hence, rewiring them to fit your needs should be easy peasy.

## Create Components

Development is easy and fun! Just follow these simple steps to get started:

1. Have at least [Node.js 6.x](https://nodejs.org/) installed
1. Fork [the main repository](https://github.com/IdanCo/ng1bs4)
1. Git clone the forked repository
1. Run the following commands
    1. `npm i`
    1. `npm run serve`
1. Open http://localhost:8080 in a browser
1. Start making amazing changes!

Create new components easily with our generator! simply install [yeoman](http://yeoman.io/), and inside the project folder type
```sh
yo ./generators/component
```
And follow the on-screen instructions. Created a cool component? Make a pull request and contribute it back.

## Contribute

§!@#$%^ **HELP NEEDED!** ^%$#@!§

We're a new open source project, trying to make our way in this crazy javascript world.
There's tons of work to be done and any effort will be appreciated. 

You can help by:
- Staring, sharing, forking, and most of all: using
- Documentation (create a pull request)
- Building new components (create a pull request)
- Improving existing components (create a pull request)
- Coming up with ideas for new components or new features (open an issue)
- Testing - unit, integration, and pregnancy (create a pull request)
- Setting up coding standards and linting (create a pull request)
- Stack, build, deploy and all that jazz



Any questions? open an issue or join us on gitter - https://gitter.im/ng1bs4
