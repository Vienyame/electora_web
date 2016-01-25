 angular.module('electora.config')
 .service('ConfigService', function() {
  var SERVER = "";
  //var SERVER = "https://ontime.sii.fr/cramobile/api";
  var SERVER =  "http://10.2.1.22/craapi/api";
   return {
     getServerIP: function() {
       return SERVER;
     },
     setServerIP: function(ip) {
     	SERVER = ip;
     }
   };
 });
