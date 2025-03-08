import React from 'react';

const PostDetails = ({ post }) => {
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <p>Author: {post.author}</p>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { id } = context.params;
  const res = await fetch(`https://dummyjson.com/posts/${id}`);
  const data = await res.json();

  return {
    props: {
      post: data,
    },
  };
}

export default PostDetails;
