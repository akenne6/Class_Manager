var classManagerApp = angular.module('classManagerApp', [
	'ngRoute',
	'ngCookies',
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
		.when('/login', {
			templateUrl: 'views/login.html',
			controller: 'LoginController'
		})
		.when('/home/:classId', {
			templateUrl: 'views/class-detail.html',
			controller: 'ClassController'
		})	
		.otherwise({
			redirectTo: '/login'
		});
  }]);

classManagerApp.run(['$rootScope', '$location', '$cookies', function($rootScope, $location, $cookies) {
	$rootScope.loggedIn = false;
	
	if ($rootScope.loggedIn) {
		$location.path('/home');
	}
}]);