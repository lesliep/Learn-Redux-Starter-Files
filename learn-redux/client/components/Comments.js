import React from 'react';
import Comment from './Comment';

const Comments = React.createClass({
  handleSubmit(e){
    e.preventDefault();
    const {postId} = this.props.params;
    const author = this.refs.author.value;
    const comment = this.refs.comment.value;

    this.props.actions.addComment(postId, author, comment);
    this.refs.commentForm.reset();
  },
  removeComment(e){
    e.defaultPrevented;
    console.log('Comment removed');
  },
  render(){
    return (
      <div className="comments">
        { this.props.postComments.map((comment, i) => <Comment 
          key={i}
          postId={this.props.postId}
          removeComment={this.removeComment}
          {...comment}/>
        ) }
        <form ref="commentForm" 
          className="comment-form" 
          onSubmit={this.handleSubmit}>
          <input type="text" ref="author" placeholder="author"/>
          <input type="text" ref="comment" placeholder="comment" />
          <input type="submit" hidden />
        </form>
      </div>
    );
  }
});

export default Comments;
