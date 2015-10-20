(function () {
	"use strict";

	angular
		.module("app")
		.controller("tabController", tabController);

	tabController.$inject = ["$scope", "$http"];

	function tabController($scope, $http) {
		$scope.helloFromTab = "hello from tab";

		$scope.sendRequest = function () {
			$http.get("/api/teammembers").then(function (result) {
				console.log(result);
			});
		};
		$scope.sendRequestById = function () {
			$http.get("/api/teammembers/1").then(function (result) {
				console.log(result);
			});
		};
		$scope.addPerson = function () {
			var person = {
				firstName: "Lesha",
				lastName: "Pavlenko"
			};
			$http.post("/api/teammembers", person).then(function (result) {
				console.log(result);
			});
		};
		$scope.addPersonError = function () {
			var person = {
				firstName: "Pasha"
			};
			$http.post("/api/teammembers", person).then(function(result) {
					console.log(result);
				},
				function(errorResult) {
					console.log(errorResult);
				});
		};
	}


}());