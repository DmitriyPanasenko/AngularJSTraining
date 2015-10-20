(function(){
	
	'use strict';
	
	angular
		.module('trainingApp')
		.factory('restService', restService);
		
	restService.$inject=['$resource'];
	
	function restService($resource){
		return $resource('http://localhost:3000/api/:entity/info/:id', {entity: 'dep'}, {
			update:{method: 'put'},
			getProjects:{method: 'get', params: {entity: 'projects'}, isArray: true},
			getProject:{method: 'get', params: {entity: 'project'}, url:'http://localhost:3000/api/:entity/info/:name'},
			getSolomotoTeam:{method: 'get', params: {entity: 'project', name: 'solomoto'}, url:'http://localhost:3000/api/:entity/info/:name'},
			updateUser: {method: 'post', params: {entity:'user'}, transformRequest:transformRequestFunc},
			removeUser: {method: 'delete', params: {entity: 'user'}, interceptor: {request: requestFunc, responseError: responseErrorFunc}}
		});
		
		function transformRequestFunc(data){
			console.log('Transform data: ', data);
			return data;
		}
		
		function responseErrorFunc(data){
			console.log('responseErrorFunc data: ', data);
			return data;
		}
		
		function requestFunc(data){
			console.log('requestFunc data: ', data);
			return data;
		}
	}
	
})();