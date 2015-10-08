(function() {

 'use strict';
 
 angular
  .module('trainingApp')
  .constant('myObject', {
	a: 1,
	b: "a",
	c: true
  })
  .value('myValue1', 'Hello world')
  .value('myValue2', 'Hello guys')
  .factory('StorageService', StorageService);
  
  function StorageService(){
	var buffer = {};
	var api ={
		save: save,
		get: get,
		getNet: getNet
	};
	return api;
	
	function save(obj){
		buffer = angular.copy(obj);
	}
	
	function get() {
		return buffer;
	}
	
	function getNet(obj) {
		return obj.filter(function(item){
			return item.skill.toLowerCase().indexOf('.net') !== -1;
			});
		}
	}
  }
)();