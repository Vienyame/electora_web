/**
 * Created by vedorhtossa on 27/01/2016.
 */
angular.module('electora.agenda')
  .controller('AgendaController',['EvenementService', function (EvenementService) {

    var agendaCtrl = this;

    agendaCtrl.Events = {};

/*    EvenementService.getEvent()
      .then(function (obj) {
        agendaCtrl.Events = obj;
        console.log(obj);
      });*/

    EvenementService.getEvent()
      .then(function success(data) {

        agendaCtrl.Events = data;
        console.log(agendaCtrl.Events);

      },
      function error(err) {

      });
  }]);
