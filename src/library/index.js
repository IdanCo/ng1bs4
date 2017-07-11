// class Library {
//   get moto() {
//     return 'library is working!';
//   }
//   doSomething() {
//     return 'library is working!';
//   }
// }
//
// const library = new Library();
//
// export { library };

// this is working!!!!
// import { doSomething, doSomethingElse } from './features';
//
// export {
//   doSomething,
//   doSomethingElse
// };

import { doSomething, doSomethingElse } from './features';

function init() {
  console.info('initing');
}

init();

class library {
  constructor(element) {
    this.element = element;
  }



  doSomething() {
    console.info(this.element);
    // this.element.find('.test-library').text('boom!');
    return doSomething();
  }
}

module.exports = (element) => {
  return new library (element);
};