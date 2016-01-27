/**
 * Created by Serge on 27/01/2016.
 */
angular.module('electora.program')
  .service('ThemeService', function($http){

    return{
      getTheme :  getTopic
      }

    function getTopic(){
      return $http.get('data/themes.json')
        .then(function success(obj){
          return obj.data;
        })
    }

  });
