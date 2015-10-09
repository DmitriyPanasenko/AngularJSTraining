(function(){
	'use strict';
	
	angular
		.module('trainingApp')
		.directive('userList', userListDirective);
		
	function userListDirective(){
		var directive = {
			restrict: 'A',
			scope: {
				members: '=userList' //& - method; =  - variable binding, @ - string
			},
			templateUrl: 'teamTemplate.html',
			//template: '<ul class="trainee-list"><li ng-repeat="trainee in members">{{ trainee.name }}</li></ul>',
			link: linkFunc,
			controller: userListController, // Bad practice
			controllerAs: 'userCtrl'		// Bad practice
		};
		
		return directive;
		
		function linkFunc( scope, element, attrs ){
			
			element.on('mouseenter', function(){
				console.log(this)
			});
			
			scope.$on('$destroy', function(){
				// Clean up custom added events				
			});
			
		}
	}
	
	userListController.$inject = ['$scope']; // Bad practice
	
	function userListController($scope){ // Bad practice
		// Controller's body
	}
}());