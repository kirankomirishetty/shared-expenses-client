angular.module('SharedExpensesApp', [
  // 'SharedExpensesApp.services',
  'login',
  'landing',
  'dashboard',
  'directives',
  'bills',
  'xeditable',
  // 'controllers',
  'ngRoute'
])
	/*.
	config(['$routeProvider', function($routeProvider) {
	  $routeProvider.
		when("/landing", {templateUrl: "/js/landing/html/landing.html"}).
		// when("/welcome", {templateUrl: "home/welcome.html", controller: "WelcomeController"}).
		otherwise({redirectTo: '/login'});
	}])*/;