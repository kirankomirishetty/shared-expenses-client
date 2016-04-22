angular.module("addExpensesService", []).factory("AddExpensesService",['$http', function($http){

	return {
		addExpenses: function(callback) {
			console.log("Inside AddExpensesService");
			callback("Success");
		}
				
	};
			
}]);