/**
 * Created by Serge on 26/01/2016.
 */
angular.module('electora.program')
  .controller('ProgramCtrl', function ($scope) {
    $scope.playlists = [
      {title: 'Aného', id: 1},
      {title: 'Quartier de Bê', id: 2},
      {title: 'Adigogomé', id: 3},
      {title: 'Pkalimé', id: 4},
      {title: 'Sokodé', id: 5},
      {title: 'Kara', id: 6}
    ];
  })
  .controller('ProgramCtrl', function ($scope, $stateParams) {
  })
