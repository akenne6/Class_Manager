'use strict';

/* Controllers */

var classManagerControllers = angular.module('classManagerControllers', []);

classManagerControllers.controller('MainController', ['$scope', 'person', function($scope, person) {
  person.success(function(data) {
  	$scope.person = data;
  });
}]);

classManagerControllers.controller('LoginController', ['$scope', '$location', 'authenticateUser', function($scope, $location, authenticateUser) {
	$scope.loginUser = function () {
		authenticateUser.login($scope.username, $scope.password, function(data) {
			if (data.success) {
				$location.path('/home');
			}			
		});
	};
}]);

classManagerControllers.controller('ClassController', ['$scope', 'person', '$routeParams',
  function($scope, person, $routeParams) {
	//Will use php and service to select appropriate class using classId in the future
    var classId = $routeParams.classId.split('-')[0];
	person.success(function(data) {
		$scope.thisClass = data.classes[classId];
	});
	
	
		
	
  }]);