import Ember from 'ember';

export default Ember.Route.extend({
  restoreState: false,
  beforeModel() {
    document.title="PixBurb ECom";
    try {
        if(Ember.$.cookie("emberRoute") !== null && typeof Ember.$.cookie("emberRoute") !== "undefined") {
        if(window.location.hash.length < 2) {
          this.transitionTo(Ember.$.cookie("emberRoute"));
        }
      }
    }
    catch(exception) {
      this.set("restoreState", true);
    }
  },

  destroyer: function() {
    this.controller.destroy();
  }.on("deactivate"),

  actions: {
    didTransition: function () {
      if(this.get("restoreState")){
        try{
          if(Ember.$.cookie("emberRoute") !== null && typeof Ember.$.cookie("emberRoute") !== "undefined") {
            if(window.location.hash.length < 2) {
              let troute = Ember.$.cookie("emberRoute").replace(/\./g,"\/");
              if(!/$\//.test(troute)){
                troute = '/' + troute;
              }
              this.controller.restoreState(troute);
            }
          }
        }
        catch(exception){
        }
      }
    }
  }
});
