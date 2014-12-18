demoMovieApp
	.controller("MovieController", ['$rootScope', '$scope', 'MovieService', function($rootScope, $scope, MovieService){

		$scope.query = "";
		$scope.results = [];

		var queryTimeout = 500,
			runningQuery = false;

		MovieService
			.config()
			.success(function(config){
				$scope.config = config;
                console.log(config)
			});

		MovieService
			.popular()
			.success(function(popularMovies){
				$scope.popularMovies = _.first(popularMovies.results, 5);
			});

		$scope.search = function(){
            if (runningQuery) {
				clearTimeout(runningQuery);
				runningQuery = false;
			}
			runningQuery = setTimeout(function(){
				MovieService
					.find($scope.query)
					.success(function(movies){
						$scope.results = movies.results;
					});
			}, queryTimeout);
		}

        $scope.showMovieModal = function(movie){
            $scope.modalMovie = movie;
        }

	}]);
