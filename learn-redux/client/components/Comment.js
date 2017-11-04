import React from 'react';

const Comment = (comment, i) => (
  <div className="comment" key={i}>
    <p>
      <strong>{comment.user}</strong>
      { comment.text }
      <button className="remove-comment">&times;</button>
    </p>
  </div>
);

export default Comment;

