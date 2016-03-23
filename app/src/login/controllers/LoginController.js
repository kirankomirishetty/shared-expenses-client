angular.module("loginController", []).

controller("LoginController", function($scope) {

	$scope.doLogin = function() {
		console.log("/controllers   User name value is "+$scope.userName+" password is "+$scope.password);
	};
});

