angular.module('ipmpMobile.components.login')
.service('LoginService', function($http, CONFIG, VIEWS, AuthService, ConfigService) {
  return {
    authentification: function(objs) {
      ConfigService.setServerIP(objs.agencyIP);
      return $http({
        url: ConfigService.getServerIP() + '/login',
        method: "POST",
        data: JSON.stringify({
          'login': objs.login,
          'password': objs.password
        })
      });
    },

    logout: function() {
      return $http.get(ConfigService.getServerIP() + '/logout').then(function success(data) {
        AuthService.clearToken();
        return data;
      });
    }
  };
});
