angular.module('bills', [
  // 'SharedExpensesApp.services',
  'createBillController',
  'createBillService',
  'addExpensesController',
  'addExpensesService',
  'xeditable',
  'ngRoute'
], 
['$routeProvider', function($routeProvider) {
  $routeProvider.
	when("/createBill", {templateUrl: "/src/bills/html/createBill.html", controller: "CreateBillController"}).
	when("/addExpenses", {templateUrl: "/src/bills/html/addExpenses.html", controller: "AddExpensesController"}).
	otherwise({redirectTo: '/bills'});
}]);