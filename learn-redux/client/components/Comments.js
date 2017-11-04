import React from 'react';
import Comment from './Comment';

const Comments = React.createClass({
  render(){
    return (
      <div className="comments">
        { this.props.postComments.map((comment) => <Comment {...comment}/>) }
        <form ref="commentForm" className="comment-form">
          <input type="text" ref="author" placeholder="author"/>
          <input type="text" ref="comment" placeholder="comment" />
          <input type="submit" hidden />
        </form>
      </div>
    );
  }
});

export default Comments;
