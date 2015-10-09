(function(){
	'use strict';
	
	angular
		.module('trainingApp')
		.controller('teamController');
		
	teamController.$inject = ['$scope'];
	
	function teamController($scope){
		
		$scope.team.forEach(function(trainee){
		
			trainee.skill = 'js';
				
		});
		
	} 
		
}());