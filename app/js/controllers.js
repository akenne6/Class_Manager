'use strict';

/* Controllers */

var classManagerControllers = angular.module('classManagerControllers', []);

classManagerControllers.controller('MainController', ['$scope', '$cookieStore', 'person', function($scope, $cookieStore, person) {
  /* Test to make sure the cookie that was set during log in could be retrieved
  $scope.name = $cookieStore.get('globals').currentUser.username;
  */
  person.success(function(data) {
  	$scope.person = data;
  });
  
}]);

classManagerControllers.controller('LoginController', ['$scope', '$location', '$cookies', 'authenticateUser', function($scope, $location, $cookies, authenticateUser) {
	$scope.loginUser = function () {
		authenticateUser.login($scope.username, $scope.password, function (response) {
                if (response.success) {
                    authenticateUser.setCookieInfo($scope.username);
                    $location.path('/home');
                } else {
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