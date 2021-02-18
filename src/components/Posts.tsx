import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../redux/features/posts/postsSlice";

export type PostObject = {
  userId?: number;
  id?: number;
  title: string;
  body: string;
};
interface PostState {
  posts: PostObject[];
}

const Posts = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
  const posts = useSelector((state: PostState) => state.posts);
  return (
    <>
      {posts.map(post => (
        <div key={post.id}>
          <p>id: {post.id}</p>
          <h3 style={{ textTransform: "uppercase" }}>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </>
  );
};

export default Posts;
