demoMovieApp
	.controller("MovieController", ['$rootScope', '$scope', 'MovieService', function($rootScope, $scope, MovieService){

		$scope.query = "";
		$scope.results = [];

		var queryTimeout = 500,
			runningQuery = false;

		MovieService
			.config()
			.then(function(config){
				$scope.config = config;
			});

		MovieService
			.popular()
			.then(function(popularMovies){
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
					.then(function(movies){
						setTimeout(function(){ $scope.$apply(function(){ $scope.results = movies.results; }); }, 10);
					});
			}, queryTimeout);
		}

	}]);