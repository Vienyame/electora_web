angular.module('electora.login')
  .controller('LoginController', function ($scope, $ionicModal, $location, AgencyService, LoginService, AuthService,ArrondissementService,DepartementService,ThemeService) {
    var loginCtrl = this;

    ArrondissementService.getArdmt()
  .then(function(obj) {
    console.log(obj)
  });

    DepartementService.getDptmt()
      .then(function(obj) {
        console.log(obj)
      });

    ThemeService.getTheme()
      .then(function(obj) {
        console.log(obj)
      });

    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('js/components/login/src/index.html', {
      scope: $scope
    }).then(function (modal) {
      $scope.modal = modal;
    });
    // Triggered in the login modal to close it
    $scope.closeLogin = function () {
      $scope.modal.hide();
    };

    // Open the login modal
    $scope.openLogin = function () {
      $scope.modal.show();
    };

    loginCtrl.errorMsg = '';
    loginCtrl.login = {
      //profil: loginCtrl.profils[0]
    };
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

    loginCtrl.openLink = function (url) {
      window.open(url, '_system', 'location=yes');
    };
  });
