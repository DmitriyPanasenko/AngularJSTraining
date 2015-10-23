(function(){
	'use strict';

	 angular
	 	.module('trainingApp', [])
	 	.controller('teamController', teamController);

	teamController.$inject = ['$scope', '$timeout'];

	function teamController($scope, $timeout){
		
		setTimeout(function(){
			delete $scope.array[1];
			console.log('Delete');
		},3000);
		setTimeout(function(){
			$scope.array.push({ name: 'User 20'});
			$scope.$digest();
			console.log('Push');
		},6000);
		
		$timeout(function(){
			$scope.array.push($scope.array[3]);
			console.log('Push2');
		},9000);
		
		$timeout(function(){
			$scope.array.push({ name: 'User 30'});
			console.log('Push3');
		},12000);
		
		$scope.array = [
			{
				name: 'User 1',
				phone: '12345',
				email: 'user@test.com'
			},
			{
				name: 'User 2',
				phone: '12345',
				email: 'user@test.com'
			},
			{
				name: 'User 3',
				phone: '12345',
				email: 'user@test.com'
			},
			{
				name: 'User 4',
				phone: '12345',
				email: 'user@test.com'
			},
			{
				name: 'User 5',
				phone: '12345',
				email: 'user@test.com'
			},
			{
				name: 'User 6',
				phone: '12345',
				email: 'user@test.com'
			},
			{
				name: 'User 7',
				phone: '12345',
				email: 'user@test.com'
			},
			{
				name: 'User 8',
				phone: '12345',
				email: 'user@test.com'
			},
			{
				name: 'User 9',
				phone: '12345',
				email: 'user@test.com'
			}
		];
		
	}

})();












