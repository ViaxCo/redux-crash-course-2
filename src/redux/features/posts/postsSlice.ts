import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { PostObject } from "../../../components/Posts";
import { AppDispatch } from "../../store";

// export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
//   const res = await fetch(
//     "https://jsonplaceholder.typicode.com/posts?_start=0&_limit=10"
//   );
//   const posts: PostObject[] = await res.json();
//   return posts;
// });

const postsSlice = createSlice({
  name: "posts",
  initialState: [] as PostObject[],
  reducers: {
    postsFetched(state, action) {
      return action.payload as PostObject[];
    },
    postAdded(state, action) {
      state.unshift(action.payload as PostObject);
    },
  },
  //   extraReducers: builder => {
  //     builder.addCase(fetchPosts.pending, (state, action) => {
  //        ...
  //     });
  //     builder.addCase(fetchPosts.fulfilled, (state, action) => {
  //       return action.payload;
  //     });
  //   },
});

export const fetchPosts = () => async (dispatch: AppDispatch) => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_start=0&_limit=10"
  );
  const posts: PostObject[] = await res.json();
  dispatch(postsFetched(posts));
};

export const addPost = (postData: PostObject) => async (
  dispatch: AppDispatch
) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(postData),
  });
  const post: PostObject = await res.json();
  dispatch(postAdded(post));
};

export const { postAdded, postsFetched } = postsSlice.actions;

export default postsSlice.reducer;
