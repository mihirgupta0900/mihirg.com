import { GetStaticProps } from "next";
import { FC } from "react";
import Layout from "../components/Layout";
import { getAllBlogs } from "../utils";
import { Post } from "../utils/interfaces";

interface Props {
  posts: Post[];
}

const Home: FC<Props> = ({ posts }) => {
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
        <h2 className="text-5xl font-heading font-bold mb-2">Posts</h2>
        <ul>
          {posts.map((post, i) => (
            <div className="" key={i}>
              <h3>{post.frontmatter.title}</h3>
            </div>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const posts = await getAllBlogs();
  return { props: { posts } };
};

export default Home;
