import React from 'react';

const UserProfile = ({ user }) => {
  return (
    <div>
      <h1>{user.name}</h1>
      <p>Email: {user.email}</p>
      <p>Username: {user.username}</p>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { id } = context.params;
  const res = await fetch(`https://dummyjson.com/users/${id}`);
  const data = await res.json();

  return {
    props: {
      user: data,
    },
  };
}

export default UserProfile;
