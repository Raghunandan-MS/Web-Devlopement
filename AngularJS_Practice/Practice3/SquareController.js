var app = angular.module("funcApp" , []);

app.controller("SquareController" , function($scope){
	
	$scope.num = 1;
		
$scope.square = function(number)
{
	return number * number;
}	
	
});