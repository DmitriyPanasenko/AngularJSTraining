
(function() {
	"use strict";

	angular.module("app", ["ngRoute"])
		.config(["$routeProvider", appConfig]);

	function appConfig($routeProvider, $locationProvider) {
		$routeProvider.
			when("/main", {
				templateUrl: "/Scripts/app/index/partials/main.html",
				controller: "mainController"
			}).
			when("/tab", {
				templateUrl: "/Scripts/app/index/partials/tab.html",
				controller: "tabController"
			}).
			when("/user/:id", {
					template: function(templateObj) {
						return "<p>" + templateObj.id + "</p>";
					}
				}
			).
			otherwise({
				redirectTo: "/main"
			});

		
	}
}());