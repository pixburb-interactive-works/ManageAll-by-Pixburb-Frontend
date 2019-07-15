import Ember from 'ember';

export default Ember.Service.extend({

  request: function (urlobject, data, handleFailure, dataType) {
    dataType = (dataType === undefined) ? 'json' : dataType;
    if (typeof urlobject === "string") {
      urlobject = {
        url: urlobject,
        allowedForDemo: true
      };
    }

    var self = this;
    if (typeof data === "undefined") {
      data = "request=" + JSON.stringify("{}");
    } else {
      return new Ember.RSVP.Promise(function (resolve, reject) {
        Ember.$.ajax({
            url: urlobject.url,
            data: data,
            async: true,
            type: 'POST',
            dataType: dataType
          })
          .done(function (json) {
            if (typeof json !== "undefined" && json !== null) {
              resolve(json);
            } else {
              reject();
            }
          })
          .fail(function (jqXHR, textStatus, errorThrown) {
            if (jqXHR.getResponseHeader('isLoginPage') === "true" || jqXHR.getResponseHeader('isLoginPage') === true || jqXHR.getResponseHeader('Content-Type') === "text/html") {
              window.location.href = "/";
            } else {
              self.handleAjaxFail(handleFailure, reject);
            }
          });
        // .error(function(jqXHR,textStatus,errorThrown){
        // 		if(jqXHR.getResponseHeader('isLoginPage') === "true" || jqXHR.getResponseHeader('isLoginPage') === true || jqXHR.getResponseHeader('Content-Type') === "text/html") {
        // 			window.location.href="/";
        // 		}
        // 		else {
        // 			self.handleAjaxFail(handleFailure,reject);
        // 		}
        // });
      });
    }
  },

  handleAjaxFail: function (handleFailure, reject) {
    if (handleFailure !== false) {
      Ember.$('.notifyjs-corner').empty();
      Ember.$.notify(Translator.translate("ember_connectionFailure"), {
        autoHideDelay: 3500
      });
    }
    reject();
  }

});
