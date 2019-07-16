import Ember from "ember";

export default Ember.Controller.extend({
  showNotification: false,
  actions: {
    showNotification: function () {
      this.set("showNotification", !this.get("showNotification"));
    }
  }
});
