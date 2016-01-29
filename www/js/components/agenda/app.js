/**
 * Created by vedorhtossa on 27/01/2016.
 */
angular.module('electora.agenda',[])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('app.agenda', {
        url: '/agenda',
        views: {
          'menuContent': {
            templateUrl: 'js/components/agenda/src/agenda.html',
            controller: 'AgendaController as agendaCtrl',
            controllerAs:'aAgendaCtrl'
          }
        }
      })
      .state('app.prgm_detail', {
        url: '/agenda/:agendaId',
        views: {
          'menuContent': {
            templateUrl: 'js/components/agenda/src/agendaDetails.html',
            controller: 'agendaCtrl'
          }
        }
      })
  });
