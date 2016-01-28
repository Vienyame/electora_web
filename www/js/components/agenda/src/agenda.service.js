/**
 * Created by vedorhtossa on 27/01/2016.
 */
angular.module('electora.agenda')
  .service('EvenementService', function($http){

    return{
      getEvent : getEvnt
    }


    function getEvnt(){
      return $http.get('data/evenements.json')
        .then(function success(obj){
          return obj.data;
        })
    }
  });
