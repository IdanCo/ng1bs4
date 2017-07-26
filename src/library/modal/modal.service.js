import template from './modal.html';

class ModalService {
  constructor ($document, $compile) {
    this.$document = $document;
    this.$compile = $compile;
  }

  getData() {
    return 1 + 2;
  }

  open() {
    const modalWrapper = angular.element(template);
    const body = this.$document.find('body').eq(0);
    body.append(modalWrapper);
    this.$compile(modalWrapper);
    modalWrapper.modal();
    modalWrapper.modal('toggle');
  }
}

export default ModalService;

