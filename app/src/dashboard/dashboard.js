angular.module('dashboard', [
  // 'SharedExpensesApp.services',
  'dashboardController',
  // 'services',
  'ngRoute'
], 
['$routeProvider', function($routeProvider) {
  $routeProvider.
	when("/dashboard", {templateUrl: "/src/dashboard/html/dashboard.html", controller: "DashboardController"}).
	// when("/welcome", {templateUrl: "home/welcome.html", controller: "WelcomeController"}).
	otherwise({redirectTo: '/dashboard'});
}]);