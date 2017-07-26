class controller {
  constructor ($ngbsModal) {
    this.$ngbsModal = $ngbsModal;
  }
  
  openModal () {
    this.$ngbsModal.open();
  }

}

export default controller;
