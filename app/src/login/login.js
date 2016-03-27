angular.module('login', [
  // 'SharedExpensesApp.services',
  'loginController',
  'ngRoute'
], 
['$routeProvider', function($routeProvider) {
  $routeProvider.
	when("/login", {templateUrl: "/src/login/html/login.html", controller: "LoginController"}).
	// when("/welcome", {templateUrl: "home/welcome.html", controller: "WelcomeController"}).
	otherwise({redirectTo: '/login'});
}]);