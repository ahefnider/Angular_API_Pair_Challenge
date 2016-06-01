myApp.factory('DataFactory', ['$http', function($http) {
  console.log('dataFactory running');

var favorites = undefined;

  function getFavoriteData(){
    var promise = $http.get('/pet').then(function(response) {
      console.log('Async data returned: ', response.data);
      favorites = response.data;
    });
    return promise;
  }

  function saveFavorite(newFav) {
    var promise = $http.post('/pet', newFav).then(function(response) {
      if(response.status == 201) {
        return getFavoriteData();
      } else {
        console.log('Failed at function saveFavorite');
      }
    });
    return promise;
  }


// PUBLIC

var publicApi = {
  factorySaveFavorite: function(newFavorite) {
    return saveFavorite(newFavorite);
  },
  factoryRefreshFavoriteData: function() {
    return getFavoriteData();
  },
  factoryGetFavorites: function() {
    return favorites;
  }
};

return publicApi;
}]);
