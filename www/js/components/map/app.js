/**
 * Created by Serge on 26/01/2016.
 */
angular.module('electora.map', [])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('app.map', {
        url: '/map',
        views: {
          'menuContent': {
            templateUrl: 'templates/map.html',
            controller: 'MapCtrl'
          }
        }
      });
  });
