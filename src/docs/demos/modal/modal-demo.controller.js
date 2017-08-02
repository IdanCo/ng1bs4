class controller {
  constructor($log, $ngbsModal) {
    Object.assign(this, { $log, $ngbsModal });
  }

  openModalPrompt() {
    const options = {
      title: 'Modal Prompt Title',
      body: 'Here is the prompt text',
      buttons: [
        { type: 'primary',    text: 'Thanks!' },
        { type: 'secondary',  text: 'Close' }
      ]
    };

    this.$ngbsModal.openPrompt(options)
      .then((button) => {
        this.$log.info('clicked ' + button.text);
      }, () => {
        this.$log.info('modal prompt closed without button click');
      });
  }
}

export default controller;
