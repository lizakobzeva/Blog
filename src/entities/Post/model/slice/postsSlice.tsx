import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Post, PostsShema } from "../types/PostTypes";
import { GetPosts } from "features/PostsOperations/model/services/GetPosts/GetPosts";
import { GetPost } from "features/PostsOperations/model/services/GetPost/GetPost";
import { CreatePost } from "features/PostsOperations/model/services/CreatePost/CreatePost";

let initialState: PostsShema = {
  posts: [{ id: "", title: "", imageUrl: "", text: "", userId: "" }],
  post: { id: "", title: "", imageUrl: "", text: "", userId: "" },
  isLoading: false,
  isError: false,
};
export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPostsData: (state, action: PayloadAction<Array<Post>>) => {
      state.posts = action.payload;
    },
    initPostsData: (state) => {},
  },
  extraReducers: (builder) => {
    builder.addCase(GetPosts.fulfilled, (state, action) => {
      state.posts = action.payload;
      state.isLoading = false;
    });
    builder.addCase(GetPosts.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(GetPost.fulfilled, (state, action) => {
      state.post = action.payload;
      state.isLoading = false;
    });
    builder.addCase(GetPost.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(CreatePost.fulfilled, (state, action) => {
      state.posts.push(action.payload);
    });
  },
});

export const { setPostsData, initPostsData } = postsSlice.actions;

export default postsSlice.reducer;
