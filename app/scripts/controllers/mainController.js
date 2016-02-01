'use strict';

app.controller('MainCtrl', function ($scope, Post) {
	$scope.postForm = false;
	$scope.posts = Post.query();
});
