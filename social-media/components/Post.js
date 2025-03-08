import React, { useState } from 'react';
import './Post.css'; // Import Post CSS

const Post = ({ post }) => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleLike = () => {
  };

  const handleView = () => {
  };

  const toggleDialog = () => {
    setDialogOpen(!dialogOpen);
  };

  return (
    <div className="post">
      <div className="user-details">
        <p>User: {post.user}</p>
      </div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <div className="post-stats">
        <span onClick={handleLike}>👍 {post.likes} Likes</span>
        <span onClick={handleView}>👁️ {post.views} Views</span>
      </div>
      <button onClick={toggleDialog}>Like, Comment, Share</button>
      {dialogOpen && (
        <div className="dialog">
          <h3>Interact with this post</h3>
          <button onClick={handleLike}>Like</button>
          <button>Comment</button>
          <button>Share</button>
          <button onClick={toggleDialog}>Close</button>
        </div>
      )}
    </div>
  );
};

export default Post;
