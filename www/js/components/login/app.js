angular.module('electora.login', [])

  .config(function($stateProvider) {
    $stateProvider

      .state('login', {
        url: '/login',
        abstract: true,
        templateUrl: 'js/components/login/src/index.html'
      })

      .state('login.index', {
        url: '',
        views: {
          'formContent': {
            templateUrl: 'js/components/login/src/form.html',
            controller: 'LoginController as loginCtrl'
          }
        }
      });
  });
