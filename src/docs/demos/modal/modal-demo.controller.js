class controller {
  constructor ($ngbsModal) {
    this.$ngbsModal = $ngbsModal;
  }

  openModalPrompt () {
    const options = {
      title: 'Modal Prompt Title',
      body: 'Here is the prompt text',
      buttons: [
        { type: 'primary',    text: 'Thanks!' },
        { type: 'secondary',  text: 'Close' }
      ]
    };

    this.$ngbsModal.openPrompt(options)
      .then(function(button) {
        console.info('clicked ' + button.text);
      }, function() {
        console.info('modal prompt closed without button click');
      });
  }

}

export default controller;
