var app = angular.module("greetApp" , []);

app.controller('GreetingController' , function($scope){

	$scope.user = "World!";

	$scope.GreetUser = function(arguments)
	{
		$scope.user = arguments;
	}

});