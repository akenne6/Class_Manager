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