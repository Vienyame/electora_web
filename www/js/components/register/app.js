/**
 * Created by Serge on 25/01/2016.
 */
angular.module('electora.register',[])
  .config(function($stateProvider) {
    $stateProvider

      .state('app.register', {
        url: '/register',
        abstract: true,
        templateUrl: 'js/components/register/src/index.html'
      })

      .state('register.index', {
        url: '',
        views: {
          'formContent': {
            templateUrl: 'js/components/register/src/form.html',
            controller: 'RegisterController as RegisterCtrl'
          }
        }
      });
  });
