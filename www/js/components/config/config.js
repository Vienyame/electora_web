(function() {
  function getServerIP() {
    var API_SERVER = {
      // IPMP: "https://ontime.sii.fr/cramobile/api"
     IPMP: 'http://10.2.1.22/craapi/api'
    };
    return API_SERVER.IPMP;
  }

  angular.module('electora.config')
  .constant('VIEWS', {
    LOGIN: '/login',
    USER: '/user'
  })
  .value('CONFIG', {
    logoutTimer: 1800000,
    ipAddress: getServerIP(),
    daysNumber: 10,
    debounceTimer: 800
  });
})();
