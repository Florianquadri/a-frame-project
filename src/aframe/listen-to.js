AFRAME.registerComponent('listen-to', {
  multiple: true,
  schema: {
    target: {type: 'selector'},
    event: {type: 'string', default: 'click'},
    emit: {type: 'string', default: 'click'},
  },
  init: function () {
    console.log("listen-to", this.data);
    this.onEvent = this.onEvent.bind(this);
    this.data.target.addEventListener(this.data.event, this.onEvent);
  },

  onEvent: function () {
    this.el.emit(this.data.emit);
  },

  update: function (oldData) {
    if (oldData.target != this.data.target || oldData.event != this.data.event) {
      if (oldData.target) oldData.target.removeEventListener(oldData.event, this.onEvent);
      this.data.target.addEventListener(this.data.event, this.onEvent);
    }
  },
  remove: function () {
    this.data.target.removeEventListener(this.data.event, this.onEvent);
  }
});