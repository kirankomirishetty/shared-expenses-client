angular.module("landingPageController", []).

controller("LandingPageController", function($scope, $location) {
	console.log("/LandingController   User name value is ");

	$scope.goToLoginPage = function() {
		$location.url("/login");
	};
});