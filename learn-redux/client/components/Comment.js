import React from 'react';

const Comment = (comment, i, removeComment, postId) => (
  <div className="comment" key={i}>
    <p>
      <strong>{comment.user}</strong>
      { comment.text }
      <button className="remove-comment"
        onClick={removeComment(postId, i)}
      >&times;</button>
    </p>
  </div>
);

export default Comment;

