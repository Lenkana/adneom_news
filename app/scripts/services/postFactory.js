app.factory("Post", function($resource) {
  return $resource("http://adneom.herokuapp.com/api/posts/:_id", 
  		 {
  		 	_id: '@_id'
  		 },
  		 {
  		 	upvote: 
  		 	{ 
 				method: 'PUT',
 				url: "http://adneom.herokuapp.com/api/posts/:_id/:action",
 				params: 
 				{
 					_id: '@_id',
 					action: 'upvote'
 				}
			},
			addComment: 
			{
				method: 'POST',
				url: "http://adneom.herokuapp.com/api/posts/:_id/comments"
			}
  		 });
   });