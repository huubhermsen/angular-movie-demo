demoMovieApp
	.factory('MovieService', ['$rootScope', '$q', '$http', function($rootScope, $q, $http){
		var MovieService = {},
			requestUri = "https://api.themoviedb.org/3/",
			api_key = "?api_key=13711b91ef1e384b40c112d3d85adad7";

		MovieService.config = function(){
			var deferred = $q.defer();

			$http.get(requestUri + "configuration" + api_key)
				.success(function(response){
					deferred.resolve(response);
				})
				.error(function(error){
					deferred.reject(error);
				});

			return deferred.promise;
		}

		MovieService.popular = function(){
			var deferred = $q.defer();

			$http.get(requestUri + "movie/popular" + api_key)
				.success(function(response){
					deferred.resolve(response);
				})
				.error(function(error){
					deferred.reject(error);
				});

			return deferred.promise;
		}

		MovieService.find = function(query){
			var deferred = $q.defer();

			if (query.length === 0) {
				deferred.resolve([]); 
				return deferred.promise;
			}

			$http.get(requestUri + "search/movie" + api_key + "&query=" + query)
				.success(function(response){
					deferred.resolve(response);
				})
				.error(function(error){
					deferred.reject(error);
				});

			return deferred.promise;
		}

		return MovieService;
	}]);