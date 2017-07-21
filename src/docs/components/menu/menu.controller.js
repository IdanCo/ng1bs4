class controller {
  constructor() {
    this.menuDisplay = "Choose an action";
    this.menuActions = [
      { display: "action1", action: () => alert("action1")},
      { display: "action2", action: () => alert("action2")},
      { display: "action3", action: () => alert("action3")},
      { display: "action4", action: () => alert("action4")},
      { display: "action5", action: () => alert("action5")},
      { display: "action6", action: () => alert("action6")}
    ];
  }
}

export default controller;