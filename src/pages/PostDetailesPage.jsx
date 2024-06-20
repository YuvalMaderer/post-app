import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const POST_URL = "http://localhost:8001/posts/";

function PostDetailsPage() {
  const { postId } = useParams();
  const { data: post, error, loading } = useFetch(POST_URL + postId);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>{post?.title}</h1>
      <p>{post?.body}</p>
      <p>
        <strong>Created At:</strong> {post?.createdAt}
      </p>
      <p>
        <strong>Updated At:</strong> {post?.updatedAt}
      </p>
      <p>
        <strong>Likes:</strong> {post?.reactions.likes}
      </p>
      <h3>Comments:</h3>
      <ul>
        {post?.comments.map((comment, index) => (
          <li key={index}>
            <p>{comment.content}</p>
            <p>
              <strong>Created At:</strong> {comment.createdAt}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostDetailsPage;
