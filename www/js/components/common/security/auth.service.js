angular.module('electora.common')
.service('AuthService', function() {

  var error = {
    message: ''
  };
  var TOKEN_NAME = 'token';
  return {
    getError: function getError(){
      return error;
    },
    setError: function getError(errorMessage){
      error.message = errorMessage;
    },
    getToken: function() {
      return sessionStorage.getItem(TOKEN_NAME);
    },
    setToken: function(token) {
      return sessionStorage.setItem(TOKEN_NAME, token);
    },
    isLoggedIn: function() {
      return sessionStorage.getItem(TOKEN_NAME) !== null;
    },
    clearToken: function() {
      sessionStorage.removeItem(TOKEN_NAME);
    }
  };
});
