demoMovieApp
	.factory('MovieService', ['$rootScope', '$q', '$http', function($rootScope, $q, $http){
		var MovieService = {},
			requestUri = "https://api.themoviedb.org/3/",
			api_key = "?api_key=13711b91ef1e384b40c112d3d85adad7";

		MovieService.config = function(){
			return $http.get(requestUri + "configuration" + api_key);
		}

		MovieService.popular = function(){
			return $http.get(requestUri + "movie/popular" + api_key);
		}

		MovieService.find = function(query){
			if (query == "") query = "_";
            return $http.get(requestUri + "search/movie" + api_key + "&query=" + query);
		}

		return MovieService;
	}]);
