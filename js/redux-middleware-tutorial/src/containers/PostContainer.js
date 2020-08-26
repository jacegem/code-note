import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPost, clearPost } from "../redux/modules/posts";
import Post from "../components/Post";

function PostContainer(props) {
  const { postId } = props;
  const { loading, data, error } = useSelector(
    (state) => state.posts.post[postId]
  ) || {
    loading: false,
    data: null,
    error: null,
  };
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) return;
    dispatch(getPost(postId));
  }, [postId, dispatch, data]);

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러 발생!</div>;
  if (!data) return null;

  return <Post post={data} />;
}

export default PostContainer;
