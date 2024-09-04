import { Outlet } from "react-router-dom";

function PostsLayout() {
  return (
    <>
      <h2>여기서부터는 Posts의 하위 경로들입니다</h2>
      <hr />
      <Outlet />
    </>
  );
}

export default PostsLayout;
