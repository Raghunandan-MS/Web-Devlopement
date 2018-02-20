var app = angular.module("spiceApp" , []);

app.controller('SpiceController' , function($scope){

	$scope.custom = "wasabi";
	$scope.spice = "Very";

	$scope.DisplaySpice = function(arg)
	{
		$scope.spice = arg;
	}

});