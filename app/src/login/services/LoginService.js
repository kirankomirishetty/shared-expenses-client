angular.module("loginService", []).factory("LoginService",['$http', function($http){

	return {
		doLogin: function(userName, password, callback) {
				var postData = {
					userName: userName,
					password:password
				};
				 var config = {
				  	headers: {
				  	// 'Access-Control-Allow-Origin': 'http://localhost:1001',
		            // 'Authorization': 'Basic d2VudHdvcnRobWFuOkNoYW5nZV9tZQ==',
		            'Accept': 'application/json',
		            'Content-Type':'application/json'
		            }
		        };
		    
				//console.log("Inside the loginService...");
				// http://default-environment.5am6mfpxst.us-east-1.elasticbeanstalk.com/login/authenticate
				$http.post("http://localhost:8080/login/authenticate", postData)
					 .success(function(data) {
					 	console.log("Inside SUCCESS");
					 	callback("SUCCESS");
					 	return "SUCCESS";
					 })
					 .error(function(data) {
					 	console.log("Inside FAILED");
					 	callback("FAILED");
					 	return "FAILED";
					 });
			
		}
	};
			
}]);