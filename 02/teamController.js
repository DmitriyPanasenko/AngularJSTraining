(function(){
	
	'use strict';
	
	angular
		.module('trainingApp')
		.controller('teamController', teamController);
	
	teamController.$inject = ['$rootScope', '$scope', '$timeout'];
		
	function teamController($rootScope, $scope, $timeout){
		$scope.team.forEach(function(trainee){trainee.skill="js";})
	}
}());