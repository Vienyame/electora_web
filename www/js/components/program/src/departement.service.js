/**
 * Created by Serge on 27/01/2016.
 */
/**
 * Created by Serge on 27/01/2016.
 */
angular.module('electora.program')
  .service('DepartementService', function($http){

    return{
      getDptmt : function(){
        return getDep();
      }
    }

    function getDep(){
      return $http.get('data/departement.json')
        .then(function success(obj){
          return obj.data;
        })
    }
  });
