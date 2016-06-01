myApp.controller('PetController', ['$scope', '$http', 'DataFactory', function($scope, $http, DataFactory) {
  $scope.dataFactory = DataFactory;
  var key = 'b58d41da39eaae52b27f773323a35bdb';
  var baseURL = 'http://api.petfinder.com/';
  $scope.breed = '';
  $scope.listPets = [
    {type: 'barnyard', label: 'Barn Animal'},
    {type: 'bird', label: 'Bird'},
    {type: 'cat', label: 'Cat'},
    {type: 'dog', label: 'Dog'},
    {type: 'horse', label: 'Horse'},
    {type: 'pig', label: 'Pig'},
    {type: 'reptile', label: 'Reptile'},
    {type: 'smallfurry', label: 'Furry Critter'}
  ];

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

  
  $scope.animal = {};
  $scope.getAnimal = function(targetAnimal) {
    var query = 'pet.getRandom';
    query += '?key=' + key;
    query += '&animal=' + targetAnimal;
    query += '&output=basic';
    query += '&format=json';

    var request = baseURL + encodeURI(query) + '&callback=JSON_CALLBACK';



    $http.jsonp(request).then(
      function(response) {
console.log(response);
        $scope.animal = response.data.petfinder.pet;
        console.log($scope.animal);
        $scope.breed = $scope.animal.animal.$t;

      }
    )
  }

  function getCount() {
    $scope.count = $scope.dataFactory.factoryGetFavorites().length;
    return $scope.count;
  };

  $scope.addToFavorites = function(){
    var favorite = {
      petId: $scope.animal.id.$t,
      petName: $scope.animal.name.$t,
      imgURL: $scope.animal.media.photos.photo[2].$t,
      description: $scope.animal.description.$t.substr(0,100)
    }

    if($scope.animal.media.photos) {
      if($scope.animal.media.photos.photo[2].$t) {
       favorite.imgURL = $scope.animal.media.photos.photo[2].$t;
      }
    }

    $scope.dataFactory.factorySaveFavorite(favorite).then(function() {
      $scope.count = $scope.dataFactory.factoryGetFavorites().length;
    });
  }

}]);
