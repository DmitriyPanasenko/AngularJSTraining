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
  .factory('StorageService', StorageService)
  .service('userInfoService', userInfoService)
  .provider('teamInfo', teamInfoProvider);
  
  function teamInfoProvider(){
  
  var privateVar = 'Private';
  
  return {
   setPrivate: function(str){
    privateVar = str;
   },
   
   $get: function(){
    function getPrivate(){
     return privateVar;
    }
    
    return {
     publicVar: 'Public',
     getPrivate: getPrivate
    }
   }
  }
  
 }
  
  function userInfoService(){
	var userName = 'Vadim';
	var project = 'ABC';
	this.getInfo = function(){
		return userName + ', ' + project;
	}
  }
  
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