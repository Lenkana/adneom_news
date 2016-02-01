'use strict';

app.controller('showNewsCtrl', function($scope, $routeParams, $log, Post) {

	$scope.post = Post.get({_id:$routeParams.idNews});
	$scope.postUpvoted = false;

	$scope.saveComment = function() {
		Post.addComment({_id: $scope.post._id}, $scope.comment,
			function(response) {
				$scope.post.comments.push(response);
				$scope.comment = null;
				$scope.addCommentForm.$setPristine();
			});
	}

	$scope.upvote = function() {
		if($scope.postUpvoted == false) {
			Post.upvote({_id: $scope.post._id}, 
				function() {
					$scope.post.upvotes++;
					$scope.postUpvoted = true;
				});
		}

	}
});