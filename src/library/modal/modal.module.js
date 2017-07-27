// Import Resources
import ModalService from './modal.service';
import './modal.scss';

// Register module, register component and export name
export default angular
  .module('ng1bs4.library.modal', [])
  .service('$ngbsModal', ModalService)
  .name;
