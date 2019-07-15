import Ember from 'ember';

export default Ember.Object.create({
  getLoginApi: {
    url: "/login",
    allowedForDemo: true
  }
});
