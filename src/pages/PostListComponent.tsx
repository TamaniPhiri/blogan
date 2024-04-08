import { useState } from "react";
import { IPost } from "../interface/types";
import PostDetailComponent from "./PostDetailComponent";
import axios from "axios";

const PostListComponent = () => {
  const [posts, setPosts] = useState<IPost[]>([]);

  const {} = useQuery(
    "getPosts",
    async () => {
      const res = await axios.get("/");
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
