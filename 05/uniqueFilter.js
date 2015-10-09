(function() {

 'use strict';
 
 angular
  .module('trainingApp')
  .filter('unique', uniqueFunction);
  
 function uniqueFunction(){
  return function(array, key){
   
   var filteredArray = [];
   array.forEach(function(item){
    
    if(filteredArray.indexOf(item[key]) === -1)
     filteredArray.push(item[key]);
   });
   
   //console.log(filteredArray);
   
   return filteredArray;
  }
 }
})();