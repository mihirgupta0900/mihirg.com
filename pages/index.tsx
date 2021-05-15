import { GetStaticProps, InferGetStaticPropsType } from "next";
import { FC } from "react";
import Layout from "../components/Layout";
import { getAllBlogs } from "../utils";

const Home: FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
  posts,
}) => {
  return (
    <Layout>
      <div className="flex flex-col w-full">
        <h1 className="text-6xl mt-12 font-heading font-medium">
          Hey! I'm Mihir Gupta
        </h1>
        <p className="mt-4 text-xl">
          Welcome to my home in the cloud. I build software, write blogs and
          share what I learn from books, people and experiences.
        </p>
      </div>
      <div className="mt-10">
        <h2 className="text-5xl font-heading font-bold">Blog Posts</h2>
        <ul>
          {posts.map((post, i) => {
            <div className="" key={i}>
              <h3>{post.title}</h3>
            </div>;
          })}
        </ul>
      </div>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const files = await getAllBlogs();
  return { props: { posts: files } };
};

export default Home;
