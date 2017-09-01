import template from './modal.html';

const DEFAULT_OPTIONS = {
  title: 'Modal Title',
  body: 'Modal body text goes here.',
  buttons: [
    {
      type: 'primary',
      text: 'OK',
    },
    {
      type: 'secondary',
      text: 'Cancel',
    },
  ]
};

class ModalService {
  constructor ($document, $compile, $rootScope, $q, $controller) {
    this.$document = $document;
    this.$compile = $compile;
    this.$rootScope = $rootScope;
    this.$q = $q;
    this.$controller = $controller;
  }

  openPrompt(options) {
    // promise object to handle prompt results
    const deferred = this.$q.defer();
    // new scope for the modal
    const modalScope = this.$rootScope.$new(true);
    // prepare the modal element
    const modalElement = angular.element(options.template || template);
    // get the document body
    const body = this.$document.find('body').eq(0);

    let buttonClicked;

    // merge user options with defaults and make it available on the modal's scope
    modalScope.options = angular.merge({}, DEFAULT_OPTIONS, options);
    // compile the modal element with the new scope
    this.$compile(modalElement)(modalScope);
    // inject the modal element into the dom
    body.append(modalElement);
    // open the modal
    modalElement.modal();

    // instantiate an optional controller
    if (options.controller) {
      this.$controller(options.controller, {$scope: modalScope, $element: modalElement});
    }

    // add promise to modalScope
    modalScope.deferred = deferred;
    
    // handle button click
    modalScope.closeModal = (button) => {
      modalElement.modal('hide');
      buttonClicked = button;
    };

    // on modal close, resolve or reject promise
    modalElement.on('hidden.bs.modal', function () {
      if (buttonClicked) {
        deferred.resolve(buttonClicked);
      } else {
        deferred.reject();
      }
      modalScope.$destroy();
    });

    return deferred.promise;
  }
}

export default ModalService;
