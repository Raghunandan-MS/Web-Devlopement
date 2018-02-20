var app = angular.module("myApp" , []);

app.controller('MainController' , function($scope){

	$scope.countries = ['EUR' , 'USD' , 'INR'];

	var qty = $scope.qty;
	var amt = $scope.cost;

	this.inCur = 'EUR';

	this.conversionRates = {

		'USD': 1,
		'EUR': 0.74,
		'INR': 68

	}

	this.convertCurrency = function(amt , inCur , outCur){

		return amt * (this.conversionRates[outCur] / this.conversionRates[inCur]);

	}

	this.totalAmt = function(outCur){

		return this.convertCurrency(qty * cost , inCur , outCur);

	}

});