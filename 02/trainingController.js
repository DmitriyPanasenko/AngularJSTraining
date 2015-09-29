(function(){
	
	'use strict';
	
	angular
		.module('trainingApp')
		.controller('trainingController', trainingController);
	
	trainingController.$inject = ['$rootScope', '$scope', '$timeout'];
		
	function trainingController($rootScope, $scope, $timeout){
		
		$scope.course  = 'Base AngularJS training';
		this.course  = 'Base AngularJS training2';
		$scope.trololo = true;
		
		$scope.team = [
			{
				name:"a"
			},
			{
				name:"b"
			},
			{
				name:"c"
			},
			{
				name:"d"
			},
			{
				name:"e"
			},
			{
				name:"f"
			},
			{
				name:"g"
			},
			{
				name:"h"
			},
			{
				name:"h"
			},
			{
				name:"h"
			},
			{
				name:"h"
			},
		];
		
		$scope.getCourse = getCourse;
		
		$timeout(function(){
			$scope.trainees = {};
		}, 2000);
		
		$scope.lesson = {};
		
		function getCourse(){
			console.log($scope.course);
		}
		
	}
	
}());