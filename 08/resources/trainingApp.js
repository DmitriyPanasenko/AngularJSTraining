(function(){
	
	'use strict';
	
	angular
		.module('trainingApp', ['ngResource'])
		.controller('trainingController', trainingController);
		
	trainingController.$inject = ['$scope', 'restService'];
	
	function trainingController($scope, restService){
		
		$scope.course = 'Angular JS training';
		
		//restService.get({id: 1})
		restService.update({entity: 'user', id: 99});
		restService.getProjects();
		restService.getProject({name:'ABC'});
		restService.getSolomotoTeam();
		restService.updateUser({id:100, phone:'123-456-789'});
		restService.removeUser({id:99});
	}
	
})();