import { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../redux/features/posts/postsSlice";

const PostForm = () => {
  const dispatch = useDispatch();

  const [post, setPost] = useState({
    title: "",
    body: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setPost(prev => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(addPost(post));
    setPost({ title: "", body: "" });
  };

  return (
    <>
      <h1>Add Post</h1>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">Title: </label>
          <br />
          <input
            type="text"
            name="title"
            id=""
            value={post.title}
            onChange={handleChange}
          />
        </div>
        <br />
        <div>
          <label htmlFor="">Body: </label>
          <br />
          <textarea
            name="body"
            id=""
            cols={30}
            rows={10}
            value={post.body}
            onChange={handleChange}
          ></textarea>
        </div>
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default PostForm;
