angular.module('electora.login')
  .controller('LoginController', function ($scope, $state, $ionicModal, $location, LoginService, AuthService) {
    var loginCtrl = this;


    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('js/components/login/src/index.html', {
      scope: $scope
    }).then(function (modal) {
      $scope.modal = modal;
    });
    // Triggered in the login modal to close it
    loginCtrl.closeLogin = function () {
      //$scope.modal.hide();
      $state.go('app.agenda');
    };

    // Open the login modal
    loginCtrl.openLogin = function () {
      console.log("hello")
      $scope.modal.show();
    };
    //var profil = loginCtrl.login.profil;
    loginCtrl.errorMsg = '';
    loginCtrl.login = {
      profil: ''
    };

    loginCtrl.isConnected = false;
    console.log(loginCtrl.login.profil)
    loginCtrl.profils = [
      {
        "name": "Membre",
        "key": "M"
      },
      {
        "name": "Directeur",
        "key": "D"
      }
    ];

    loginCtrl.loading = false;

    loginCtrl.onLogin = function () {
      /*if (loginCtrl.login.agency.value.length === 0) {
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
       }*/

      if (loginCtrl.login.username === 'sem' && loginCtrl.login.password === 'sem') {
        loginCtrl.isConnected = true;
        $state.go('app.agenda');
      } else {
        loginCtrl.errorMsg = 'Login ou password incorrect!';
      }
    };

    loginCtrl.openLink = function (url) {
      window.open(url, '_system', 'location=yes');
    };
  });
