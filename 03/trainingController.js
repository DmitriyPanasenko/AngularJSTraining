(function(){
	
	'use strict';
	
	angular
		.module('trainingApp')
		.controller('trainingController', trainingController);
	
	trainingController.$inject = ['$scope', '$timeout', '$filter'];
		
	function trainingController($scope, $timeout, $filter){
		
		$scope.course  = 'Base AngularJS training';
					
		this.course = $filter('uppercase')('AngularJS training');		
		
		$scope.trololo = true;
				
		$scope.team = [
			{ name: 'Eugen 4'},
			{ name: 'Andrew L.'},
			{ name: 'Andrew S.'},
			{ name: 'Alex'},
			{ name: 'Antonio'},
			{ name: 'Dima P.'},
			{ name: 'Dima Kh.'},
		];

		$scope.startDate = new Date();
		$scope.number = 5;
		$scope.string  = 'hello world';
		
		$scope.filteredUser = 'a';
		
		
		$scope.lesson = 2;
		
		$scope.getCourse = getCourse;
				
		
		$timeout(function(){
			$scope.trainies = true;
		}, 5000);
				
				
		function getCourse() {
			console.log($scope.course);
		}
	}
}());