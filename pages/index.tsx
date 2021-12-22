import { GetStaticProps } from "next";
import { FC } from "react";
import Layout from "../components/Layout";
import Subscribe from "../components/Subscribe";
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
          Welcome to my home in the cloud. I build software, write articles
          (WIP) and share what I learn from books, people and experiences. I
          work as the CTO of <a href="https://coinvise.co">Coinvise.</a>
        </p>

        <p className="mt-4 text-xl">
          This site is still a work in progress. Untill then feel free to reach
          me on{" "}
          <a href="https://twitter.com/0900mihir">Twitter {/*(@0900mihir)*/}</a>{" "}
          or{" "}
          <a href="mailto:mihirgupta0900@gmail.com">
            email {/* (mihirgupta0900@gmail.com) */}
          </a>{" "}
          me or subscribe to my mailing list below 👇
        </p>
      </div>
      <Subscribe />
      {/* <div className="mt-10">
        <h2 className="text-5xl font-heading font-bold mb-2">Posts</h2>
        <ul>
          {posts.map((post, i) => (
            <div className="" key={i}>
              <h3>{post.frontmatter.title}</h3>
            </div>
          ))}
        </ul>
      </div> */}
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const posts = await getAllBlogs();
  return { props: { posts } };
};

export default Home;
