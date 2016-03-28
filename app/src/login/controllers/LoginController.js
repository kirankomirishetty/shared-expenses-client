angular.module("loginController", []).

controller("LoginController", function($scope, LoginService, $location) {

	$scope.doLogin = function() {
		var loginStatus = LoginService.doLogin($scope.userName, $scope.password, function(data){
			if ("SUCCESS" == data) {
				console.log("/controllers   User name value is "+$scope.userName+" password is "+$scope.password+" login status "+loginStatus);
				$location.url("/dashboard");
			}
			else {
				console.log("/controllers   User name value is "+$scope.userName+" password is "+$scope.password+" login status "+loginStatus);
				$location.url("/login");
			}
		});
		
		
	};
});

