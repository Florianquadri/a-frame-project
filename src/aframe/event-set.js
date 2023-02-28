AFRAME.registerComponent('custom-event-set', {
  multiple: true,

  schema: {
    event: {type: 'string', default: 'click'},  
    attribute: {type: 'string'},
    value: {type: 'string'}
  },

  init: function() {
    console.log("evt set", this.data);
    this.onEvent = this.onEvent.bind(this);
    this.el.addEventListener(this.data.event, this.onEvent);
  },

  remove: function() {
    this.el.removeEventListener(this.data.event, this.onEvent);
  },

  onEvent: function(evt) {
    console.log(this.data);
    AFRAME.utils.entity.setComponentProperty(this.el, this.data.attribute, this.data.value);
  },

});