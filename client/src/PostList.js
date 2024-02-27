import { useEffect, useState } from "react";
import axios from "axios";

import CommentCreate from "./CommentCreate";
import CommentList from "./CommentList";

const PostList = () => {
  const [posts, setPosts] = useState({});
  const [error, setError] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const results = await axios.get("http://posts.com/posts");
        if (results.status === 200) {
          setPosts(results.data);
        }
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, []);

  if (error.message) {
    return error.message;
  }

  return (
    <div className="d-flex flex-row flex-wrap justify-content-between">
      {Object.values(posts).map((post) => (
        <div
          className="card"
          style={{ width: "30%", marginBottom: "20px" }}
          key={post.id}
        >
          <div className="card-body">
            <h3>{post.title}</h3>
            <CommentList comments={post.comments} />
            <CommentCreate postId={post.id} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostList;
