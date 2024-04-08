import { FC } from "react";
import { IPost } from "../interface/types";

interface Props {
  c: IPost[];
}

const PostDetailComponent: FC<Props> = ({ c }) => {
  return (
    <div>
      <div className="">
        {c.map((item, i) => (
          <div key={i}>
            <h1>{item.title}</h1>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostDetailComponent;
