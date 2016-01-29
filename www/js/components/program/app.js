/**
 * Created by Serge on 26/01/2016.
 */
angular.module('electora.program', [])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('app.program', {
        url: '/program',
        views: {
          'menuContent': {
            templateUrl: 'js/components/program/src/programs.html',
            controller: 'ProgramController as programCtrl'
          }
        }
      }
    )
      .state('app.departements', {
        url: '/departements',
        views: {
          'menuContent': {
            templateUrl: 'js/components/program/src/departements.html',
            controller: 'ProgramController as programCtrl'
          }
        }
      })
      .state('app.single', {
        url: '/program/:programId',
        views: {
          'menuContent': {
            templateUrl: 'js/components/program/src/program.html',
            controller: 'ProgramController as programCtrl'
          }
        }
      })
    ;
  });
