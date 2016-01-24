angular.module('ipmpMobile.components.login')
.controller('LoginController', function($ionicModal, $location, VIEWS, AgencyService, LoginService, AuthService, ConfigService) {
  var loginCtrl = this;
  
  loginCtrl.errorMsg = '';
  loginCtrl.agencies = AgencyService.list();
  loginCtrl.login = {
    agency: loginCtrl.agencies[0]
  };

  loginCtrl.loading = false;
  loginCtrl.sii = "http://www.groupe-sii.com";
  
  loginCtrl.onLogin = function() {
    if (loginCtrl.login.agency.value.length === 0) {
      AuthService.setError('IP agence non renseigné');
      loginCtrl.errorMsg = AuthService.getError().message;
    } else {
      loginCtrl.loading = true;
      LoginService.authentification({
        login: loginCtrl.login.username,
        password: loginCtrl.login.password,
        agencyIP: loginCtrl.login.agency.value
      })
      .then(function success(objs) {
        loginCtrl.loading = false;
        if (typeof objs.data.token === 'string') $location.path('/profil');
        loginCtrl.errorMsg = '';
      }, function error() {
        loginCtrl.loading = false;
        loginCtrl.errorMsg = AuthService.getError().message;
      });
    }
  };

  loginCtrl.openLink = function(url) {
    window.open(url, '_system', 'location=yes');
  };
});