App.controller('basicinfo', function($http, $scope, $state, $window, localStorageService) {

            $scope.basicInfo = {};
			$scope.getAthlets = function($window, $location) {

			window.location.href = '/templates/about.html';

				/*$http.post('api/athlet', $scope.basicInfo)
				.then(
						function success(response){
							console.log(response.data)
                                console.log('basicInfo - ',$scope.basicInfo)
                               localStorageService.set('basicInfo', $scope.basicInfo)
							    $state.go('athletsdetails')
						},
				function error(response){
							$state.go('/');

				});*/
			}

});