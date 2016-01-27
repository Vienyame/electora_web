/**
 * Created by Serge on 27/01/2016.
 */
angular.module('electora.program')
.service('ArrondissementService', function($http){

    return{
      getArdmt : function(){
        return getAr();
      }
    }

    function getAr(){
      return $http.get('data/arrondissement.json')
        .then(function success(obj){
          return obj.data;
        })
    }
  });
