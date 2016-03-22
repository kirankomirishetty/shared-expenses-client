angular.module("landingPageController", []).

controller("LandingPageController", function($scope, $location) {
	console.log("/LandingController   User name value is ");

	$scope.goToLoginPage = function() {
		alert("goToLoginPage button clicked...."+$location.url);
		$location.url("/login");
	};
});