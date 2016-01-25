angular.module('electora.login')
.service('LoginService', function($http, AuthService) {
  return {
    authentification: function(objs) {
      return $http({
        url: 'localhost:3010/login',
        method: "POST",
        data: JSON.stringify({
          'login': objs.login,
          'password': objs.password
        })
      });
    },

    logout: function() {
      return $http.get('localhost:3010/logout').then(function success(data) {
        AuthService.clearToken();
        return data;
      });
    }
  };
});
