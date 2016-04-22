angular.module("createBillController", []).

controller("CreateBillController", function($scope, CreateBillService, $location) {

	$scope.createBill = function() {
		
		var loginStatus = CreateBillService.createBill(function(data){
			alert("Inside createBillController");
			console.log("Inside createBillController "+data);
			/*if ("SUCCESS" == data) {
				console.log("/controllers   User name value is "+$scope.userName+" password is "+$scope.password+" login status "+loginStatus);
				$location.url("/dashboard");
			}
			else {
				console.log("/controllers   User name value is "+$scope.userName+" password is "+$scope.password+" login status "+loginStatus);
				$location.url("/login");
			}*/
		});
		
		
	};


});

