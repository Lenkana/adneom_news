'use strict';

app
	.directive('anPostList', function () {
		return {
			restrict: 'E',
			templateUrl: 'views/directives/post-list.html'
		}
	})