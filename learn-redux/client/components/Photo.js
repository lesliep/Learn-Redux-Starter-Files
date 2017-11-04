import React from 'react';
import { Link } from 'react-router';
import CSSTransitionGroup from 'react-addons-css-transition-group';

const Photo = React.createClass({
  render(){
    const { post, i, comments } = this.props;
    return (
      <figure className="grid-figure">
        <div className="grid-photo-wrap">
          <Link to={`/view/${post.code}`} >
            <img src={post.display_src} alt={post.caption} className="grid-photo"/>
          </Link>
          <CSSTransitionGroup transitionName="like" >
            <span key={post.likes} className="likes-heart">
              {post.likes}
            </span>
          </CSSTransitionGroup>
          <figcaption>
            <p>{post.caption}</p>
          </figcaption>
          <div className="control-buttons">
            <button className="like" 
              onClick={this.props.actions.incrementLikes.bind(null, i)}>
              &hearts; {post.likes}
            </button>
            <Link to={`/view/${post.code}`} className="button">
              <span className="comment-count">
                <span className="speech-bubble"></span>
                 {comments[post.code] ?  comments[post.code].length : 0}
              </span>
            </Link>
          </div>
        </div>
      </figure>
    );
  }
});

export default Photo;