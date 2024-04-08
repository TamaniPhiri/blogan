import { c } from "../constants/c";

const PostListComponent = () => {
  return (
    <section className=" min-h-screen w-full px-4 md:px-12">
      <div className="">
        {c.map((item, i) => (
          <div key={i}>
            <h1>{item.title}</h1>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PostListComponent;
