var app = angular.module("greetApp" , []);

app.controller('GreetingController' , ['$scope' , '$window', function($scope , $window){

	$scope.name = 'World';

	$scope.GreetPerson = function(name)
	{
		$window.alert("Hello" + ' ' + name);
	};

}]);