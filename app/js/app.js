var classManagerApp = angular.module('classManagerApp', [
	'ngRoute',
	'classManagerControllers',
	'classManagerServices'
]);
  
classManagerApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
		.when('/home', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})
		.when('/home/:classId', {
			templateUrl: 'views/class-detail.html',
			controller: 'ClassController'
		})
		.otherwise({
			redirectTo: '/home'
		});
  }]);
