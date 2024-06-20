import React, { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";

const POST_URL = "http://localhost:8001/posts";

function PostsFeedPage() {
  const { data: posts, error, loading } = useFetch(POST_URL);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Posts</h1>
      <div>
        <ul className="post-container">
          {posts?.map((post) => (
            <li key={post.id}>
              <Link className="post" to={post.id}>
                <h4>{post.title}</h4>
                <p>likes: {post.reactions.likes}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PostsFeedPage;
