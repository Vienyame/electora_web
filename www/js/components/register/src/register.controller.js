/**
 * Created by Serge on 25/01/2016.
 */
angular.module('electora.register')
.controller('RegisterController',[function(){
    var registerCtrl = this;

    registerCtrl.register = {
    };

    registerCtrl.profils = [
      {
        "name": "Membre",
        "key": "M"
      },
      {
        "name": "Directeur",
        "key": "D"
      }
    ];
  }]);
