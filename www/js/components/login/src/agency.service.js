angular.module('electora.login')
  .service('AgencyService', function() {
  return {
    list: function() {
      return [
      {
        name: "IDF Pilot Indus",
        value: "https://ontime.sii.fr/cramobile/api"
      }, {
        name: "DEMO",
        value: "http://10.2.1.22/craapi/api"
      }];
    }
  };
});
