myApp.controller('FavoritesController', ['$scope', '$http', 'DataFactory', function($scope, $http, DataFactory) {
  console.log('Favorites controller running');
  $scope.dataFactory = DataFactory;

  $scope.favorites = [];
  $scope.count = 0;

  if($scope.dataFactory.factoryGetFavorites() === undefined) {
    $scope.dataFactory.factoryRefreshFavoriteData().then(function() {
      $scope.favorites = $scope.dataFactory.factoryGetFavorites();
      $scope.count = $scope.favorites.length;
    });

  } else {
    $scope.favorites = $scope.dataFactory.factoryGetFavorites();
    $scope.count = $scope.favorites.length;
  }
}]);

// PRO MODE = Modify the Favorites view to display animals grouped by animal type.
// Allow a user to delete a favorite. The count display needs to reflect this!
