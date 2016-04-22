angular.module("createBillService", []).factory("CreateBillService",['$http', function($http){

	return {
		createBill: function(callback) {
			console.log("Inside createBillService");
			callback("Success");
		}
				
	};
			
}]);