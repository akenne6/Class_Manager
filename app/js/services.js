'use strict';

/* Services */

var classManagerServices = angular.module('classManagerServices', []);

classManagerServices.factory('person', ['$http', function($http) { 
  return $http.get('json/sample.json')
	.success(function(data) {
		return data;
	})
	.error(function(err) { 
		return err; 
	}); 
}]);

classManagerServices.factory('authenticateUser', ['$http', '$timeout', '$rootScope', '$cookieStore', function($http, $timeout, $rootScope, $cookieStore) { 
	var service = {};
	
	service.login = function (username, password, callback) {

		/* Dummy authentication for testing, uses $timeout to simulate api call
		 ----------------------------------------------*/
		$timeout(function () {
			var response = { success: username === 'test' && password === 'test' };
			if (!response.success) {
				response.message = 'Username or password is incorrect';
			}
			callback(response);
		}, 1000);
	};

	service.setCookieInfo = function (username) {

		$rootScope.globals = {
			currentUser: {
				username: username,
				loggedIn: true
			}
		};
		$cookieStore.put('globals', $rootScope.globals);
	};

	service.ClearCredentials = function () {
		$rootScope.globals = {};
		$cookieStore.remove('globals');
	};

	return service;
}]);