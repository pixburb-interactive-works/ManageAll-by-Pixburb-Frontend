import Ember from "ember";
import URLMAP from "ecom/utils/url-mapper"

export default Ember.Controller.extend({
  AJAX: Ember.inject.service('ajax-service'),

  actions: {
    signIn: function () {
      var params = {
        OPERATION: "ADMIN",
        ORGID: "",
        USERNAME: "",
        PWD: ""
      };
      var request = "request=" + encodeURIComponent(JSON.stringify(params));
      console.log(request);
      this.get('AJAX').request(URLMAP.getLoginApi, request).then(function (json) {
        if (json.STATUS_CODE === "0") {}
      });
    },

    forgotPwd: function () {
      console.log("forgot");
    }
  }

});
