'use strict';

app
	.directive('anPostForm', function() {
		return {
			restrict: 'E', 
			templateUrl: 'views/directives/post-form.html',
			scope: true,
			controller: function($scope, $log, Post) {
				$scope.savePost = function(post) {
					Post.save(post,
						function(response) {
							$scope.posts.push(response);
							$scope.post = null;
							$scope.addPostForm.$setPristine
							$scope.postForm = false;
						});
				}
			}
		};
	});