/**
 * Created by Serge on 26/01/2016.
 */
angular.module('electora.program')
  .controller('ProgramController', function ($scope, ArrondissementService, DepartementService, ThemeService) {

    var programCtrl = this;

    ArrondissementService.getArdmt()
      .then(function (obj) {
        console.log(obj);
        programCtrl.arrondissements = obj;
      });

    DepartementService.getDptmt()
      .then(function (obj) {
        console.log(obj);
        console.log(obj);
        programCtrl.departements = obj;
      });

    programCtrl.getArrondissement = function (index) {
      var ar = "";
      angular.forEach(programCtrl.arrondissements, function (ardmt) {

        if (ardmt._id === index) {
          ar = ardmt;
        }
      });
      return ar;

    }


    ThemeService.getTheme()
      .then(function (obj) {
        console.log(obj);
        programCtrl.themes = obj;
      });


  }
)
;
