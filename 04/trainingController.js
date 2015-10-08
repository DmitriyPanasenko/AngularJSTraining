(function(){
	
	'use strict';
	
	angular
		.module('trainingApp')
		.controller('trainingController', trainingController);
	
	trainingController.$inject = ['$scope', '$timeout', '$filter', 'myObject', 'myValue1', 'myValue2', 'StorageService'];
		
	function trainingController($scope, $timeout, $filter, myObject, myValue1, myValue2, StorageService){
		
		$scope.services = {
			constant: myObject,
			values: [myValue1, myValue2]
		}
		console.log($scope.services);
		$scope.course  = 'Base AngularJS training';
					
		this.course = $filter('uppercase')('AngularJS training');		
		
		$scope.trololo = true;
				
		$scope.team = [
			{ name: 'Eugen 4', skill:'a'},
			{ name: 'Andrew L.', skill:'b'},
			{ name: 'Andrew S.', skill:'c'},
			{ name: 'Alex', skill:'d'},
			{ name: 'Antonio', skill:'.net'},
			{ name: 'Dima P.', skill:'b'},
			{ name: 'Dima Kh.', skill:'a'},
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
		
		
		var saveTeam = function(){
			StorageService.save($scope.team);
		}
		
		var getTeam = function(){
			$scope.team = StorageService.get();
		}
		
		var clearTeam = function(){
			$scope.team = [];
		}
		
		$scope.saveTeam=saveTeam;
		$scope.getTeam=getTeam;
		$scope.clearTeam=clearTeam;
	}
}());