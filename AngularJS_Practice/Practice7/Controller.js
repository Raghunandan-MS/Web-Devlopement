var app = angular.module("hierarchyApp" , []);

app.controller('MainController' , function($scope){

	$scope.name = "Jon Doe";
	$scope.workPlace = "HPE"

});

app.controller('UserController' , function($scope){

	$scope.users = ['ABC' , 'PQR' , 'XYZ'];

});