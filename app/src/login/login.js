angular.module('login', [
  // 'SharedExpensesApp.services',
  'loginController',
  'ngRoute'
], 
['$routeProvider', function($routeProvider) {
  $routeProvider.
	when("/login", {templateUrl: "/js/login/html/login.html", controller: "LoginController"}).
	// when("/welcome", {templateUrl: "home/welcome.html", controller: "WelcomeController"}).
	otherwise({redirectTo: '/login'});
}]);