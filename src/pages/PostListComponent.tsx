import { useState } from "react";
import { IPost } from "../interface/types";
import PostDetailComponent from "./PostDetailComponent";
import axios from "axios";
import { useQuery } from "react-query";

const PostListComponent = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const user = localStorage.getItem("user");

  console.log(JSON.stringify(user));

  const { isLoading, isError } = useQuery(
    "getPosts",
    async () => {
      const res = await axios.get("https://blog-server-swart.vercel.app/post");
      return res.data;
    },
    {
      onSuccess(data) {
        console.log(data);
      },
    }
  );

  return (
    <section className=" min-h-screen w-full px-4 md:px-12">
      <PostDetailComponent c={posts} />
    </section>
  );
};

export default PostListComponent;
