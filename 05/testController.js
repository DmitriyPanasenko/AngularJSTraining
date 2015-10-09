(function() {

 'use strict';
 
 angular
  .module('trainingApp')
  .controller('testController', testController);

  testController.$inject = ['$scope', '$q', '$timeout'];
	
  function testController($scope, $q, $timeout){
  
	//step1().then(function(data){
	//	console.log(data);
	//},function(err){
	//	console.log(err);
	//},function(message){
	//	console.log(message);
	//});
	
	//step1()
	//	.then(step2)
	//	.then(step3)
	//	.then(function(){
	//		console.log('Stage complete');
	//		});
	
	$q.all([step1(), step2(), step3()]).then(function(){
			console.log('Stage complete');
			});
  
	function step1(){
		var step = $q.defer();
		
		$timeout(function(){
			//some actions
			var data = {a: 1};
			//step.notify('Waiting...');
			console.log('step1 completed');
			step.resolve(data);
		}, 1000);
		
		return step.promise;
	}
  
	function step2(){
		var step = $q.defer();
		
		$timeout(function(){
			//some actions
			var data = {a: 1};
			console.log('step2 completed');
			step.resolve(data);
		}, 2000);
		
		return step.promise;
	}
	
	function step3(){
		var step = $q.defer();
		
		$timeout(function(){
			//some actions
			var data = {a: 1};
			console.log('step3 completed');
			step.resolve(data);
		}, 1000);
		
		return step.promise;
	}
  }
  
})();
