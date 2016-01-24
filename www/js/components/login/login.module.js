angular.module('ipmpMobile.components.login', [
	'ionic'
	])

.config(function($stateProvider) {
  $stateProvider

  .state('login', {
    url: '/login',
    abstract: true,
    templateUrl: 'js/components/login/index.html',
  })

  .state('login.index', {
    url: '',
    views: {
      'formContent': {
        templateUrl: 'js/components/login/form.html',
        controller: 'LoginController as loginCtrl'
      }
    }
  });
});