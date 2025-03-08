import React, { useEffect, useState } from "react";
import Post from "../components/Post";
import NavBar from "../components/NavBar";
import Options from "../components/Options";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("default");

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("https://dummyjson.com/posts");
      const data = await response.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleSortChange = (option) => {
    setSortOption(option);
  };

  const sortedPosts = () => {
    let sortedPosts = [...posts];
    if (sortOption === "likes") {
      sortedPosts.sort((a, b) => b.likes - a.likes);
    } else if (sortOption === "views") {
      sortedPosts.sort((a, b) => b.views - a.views);
    }
    return sortedPosts;
  };

  const filteredPosts = sortedPosts().filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <NavBar />
      <div
        style={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '10px',
          overflowY: 'auto', // Enable vertical scrolling
        }}
      >
        <Options
          onSearch={handleSearch}
          sortOptions={[
            { value: 'likes', label: 'Most Liked' },
            { value: 'views', label: 'Most Viewed' },
          ]}
          onSortChange={handleSortChange}
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            width: '100%',
            marginTop: '20px',
            alignItems: 'center',
          }}
        >
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              style={{
                width: '100%', // Full width
                maxWidth: '800px', // Max width of post
                marginBottom: '20px', // Space between posts
              }}
            >
              <Post post={post} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
