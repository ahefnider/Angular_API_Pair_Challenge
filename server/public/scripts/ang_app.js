var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: '/views/home.html',
      controller: "PetController"
    })
    .when('/favorites', {
      templateUrl: '/views/favorites.html',
      controller: "FavoritesController"
    })
    // .when('/footer', {
    //   templateUrl: '/views/footer.html',
    //   controller: "FavoritesController"
    // })
    .otherwise({
      redirectTo: 'home'
    })
}]);

// myApp.controller('APIController', ['$scope', '$http', function($scope, $http) {
//   var key = 'b58d41da39eaae52b27f773323a35bdb';
//   var baseURL = 'http://api.petfinder.com/';
//   $scope.breed = '';
//   $scope.listPets = [
//     {type: 'barnyard', label: 'Barn Animal'},
//     {type: 'bird', label: 'Bird'},
//     {type: 'cat', label: 'Cat'},
//     {type: 'dog', label: 'Dog'},
//     {type: 'horse', label: 'Horse'},
//     {type: 'pig', label: 'Pig'},
//     {type: 'reptile', label: 'Reptile'},
//     {type: 'smallfurry', label: 'Furry Critter'}
//   ]
//   $scope.animal = {};
//   $scope.getAnimal = function(targetAnimal) {
//     var query = 'pet.getRandom';
//     query += '?key=' + key;
//     query += '&animal=' + targetAnimal;
//     query += '&output=basic';
//     query += '&format=json';
//
//     var request = baseURL + encodeURI(query) + '&callback=JSON_CALLBACK';
//
//
//
//     $http.jsonp(request).then(
//       function(response) {
// console.log(response);
//         $scope.animal = response.data.petfinder.pet;
//         console.log($scope.animal);
//         $scope.breed = $scope.animal.animal.$t;
//
//       }
//     )
//   }
//
// }]);

// getFavorites();

// $scope.addToFavorites = function(){
//   var data = {
//     petId: $scope.animal.id.$t,
//     petName: $scope.animal.name.$t,
//     imgURL: $scope.animal.media.photos.photo[2].$t,
//     description: $scope.animal.description.$t.substr(0,100)
//   }
//
//   $http.post('/pet', data)
//     .then(function() {
//       console.log('Post /pets')
//       getFavorites();
//     })
// }

// function getFavorites(){
//   $http.get('/pet/favorites')
//     .then(function (response){
//       response.data.forEach(function (pet){
//       });
//
//       $scope.favorites = response.data;
//       $scope.count = $scope.favorites.length;
//     })
// }
