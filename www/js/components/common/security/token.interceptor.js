angular.module('electora.common')
.service('TokenInterceptor', function($log, $q, $location, CONFIG, VIEWS, AuthService, ConfigService) {
  var isApiRequest = function(url) {
    return url.indexOf(ConfigService.getServerIP()) >= 0;
  };
  return {
    request: function(config) {
      if (AuthService.isLoggedIn()) {
        config.headers['token'] = AuthService.getToken();
      }
      else {
        $location.path(VIEWS.LOGIN);
      }
      return config;
    },
    requestError: function(config) {
      return config;
    },
    response: function(res) {
      if (res.data.token && typeof res.data.token === 'string') {
        var encodeToken = '';
        encodeToken = res.data.token.replace(/\+/g, '%2B');
        AuthService.setToken(encodeToken);
        AuthService.setError('');
      }
      return res;
    },
    responseError: function(res) {
      if (res.status === 0) {
        AuthService.setError('Erreur, verifiez votre connection internet.');
      }
      if (res.status === 401) {
        console.log("Auth error");
        AuthService.setError('Login ou mot de passe incorrect');
        $location.path(VIEWS.LOGIN);
      } else if (res.status === 500) {
        AuthService.setError("Erreur d'accès au service.");
      } else if (res.status === 403) {
        AuthService.setError("Accès interdit");
        $location.path(VIEWS.LOGIN);
        AuthService.clearToken();
      } else if (res.status === 404) {
        AuthService.setError("Page introuvable");
      }
      return $q.reject(res);
    }
  };
});
