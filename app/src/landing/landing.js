angular.module('landing', [
  // 'SharedExpensesApp.services',
  'landingPageController',
  // 'services',
  'ngRoute'
], 
['$routeProvider', function($routeProvider) {
  $routeProvider.
	when("/landing", {templateUrl: "/src/landing/html/landing.html", controller: "LandingPageController"}).
	// when("/welcome", {templateUrl: "home/welcome.html", controller: "WelcomeController"}).
	otherwise({redirectTo: '/landing'});
}]);