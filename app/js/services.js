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
/*
classManagerServices.factory('authenticateUser', ['$http', '$timeout', 
	function($http, $timeout) { 
	var service = {};
	
	service.login = function(username, password, callback) {
		$timeout(function () {
                var response = { success: username === 'test' && password === 'test' };
                if (!response.success) {
                    response.message = 'Username or password is incorrect';
                }
                callback(response);
            }, 1000);
	};
}]);
*/
classManagerServices.factory('authenticateUser', ['$http', '$timeout', function($http, $timeout) { 
	var service = {};
	
	service.login = function(username, password, callback) {
		$timeout(function() {
			var response = { success: username === "test" && password === "test" };
			callback(response);
		}, 1000);
	};
	
	return service;
}]);