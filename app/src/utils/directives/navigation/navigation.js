angular.module("navigation", []).directive("topNavigation", function(){

	return {
		restrict: 'EA',
		//template:'<div>This is my first directive</div>'
		templateUrl:'/src/utils/directives/navigation/navigation.html'
	};
});