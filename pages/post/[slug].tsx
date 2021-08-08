import fs from "fs";
import matter from "gray-matter";
import { GetStaticPaths, GetStaticProps } from "next";
import type { MDXRemoteSerializeResult } from "next-mdx-remote";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import Error from "next/error";
import { useRouter } from "next/router";
import path from "path";
import { FC, FormEvent, RefObject, useEffect, useRef } from "react";
import { useButtonDown } from "use-button-down";
import Header from "../../components/Header";
import LoadingSpinner from "../../components/LoadingSpinner";
import components from "../../components/Mdx";
import { FrontMatter } from "../../utils/interfaces";
import { POSTS_PATH } from "../../utils/mdx";

interface Props {
  frontmatter?: FrontMatter;
  content?: MDXRemoteSerializeResult<Record<string, unknown>>;
}

const Post: FC<Props> = ({ content, frontmatter }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div className="">Loading...</div>;
  }

  if (!content || !frontmatter) {
    return <Error statusCode={404} />;
  }

  const { email, setEmail, submit, status } = useButtonDown({});
  const inputRef = useRef() as RefObject<HTMLInputElement>;

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submit();
  };

  useEffect(() => {
    if (status === "subscribed" && inputRef.current) {
      inputRef.current.value = "";
    }
  }, [status]);

  return (
    <div className="flex flex-col w-full dark:text-white">
      <Header />
      <main className="flex text-xl flex-col md:mx-auto md:w-2/5 mx-4 w-full">
        <h1 className="text-5xl mt-10 mx-auto font-bold">
          {frontmatter.title}
        </h1>
        <div className="opacity-90 flex justify-between items-center">
          {/* <p className="mt-4">{format(Number(date), "do MMMM, yyyy")}</p> */}
          {/* <p>12 min read</p> */}
        </div>
        <div className="my-4 text-xl blog">
          <MDXRemote {...content} components={components} />
        </div>
        <div className="w-full flex-col justify-around py-6 items-center dark:bg-dp01 rounded-lg mb-10 flex">
          <div className="text-center">
            <h3 className="text-3xl">Want to know when I post a new blog?</h3>
            <p className="text-xl">
              Sign up for my newsletter to stay up to date.
            </p>
          </div>
          <form
            className="mt-6 w-10/12 rounded-lg flex justify-center bg-dp24 shadow-dp24"
            onSubmit={onSubmit}
          >
            <input
              type="email"
              ref={inputRef}
              placeholder="mihirgupta0900@gmail.com"
              className="rounded-md py-2 px-4 mr-4 w-full bg-transparent"
              value={email}
              onInput={(e) => setEmail(e.currentTarget.value)}
            />
            <button className="bg-accent text-gray-900 px-4 my-2 py-1 mr-2 rounded-md font-medium w-36 flex justify-center items-center h-10">
              {status === "subscribing" ? <LoadingSpinner /> : "Subscribe"}
            </button>
          </form>
        </div>
        <hr className="border-gray-400 border mb-6" />
        <div className="mt-4 mb-10">
          <div className="flex justify-center">
            <a
              href="https://github.com/mihirgupta0900"
              className="mr-3 ml-3 hover:opacity-80 transition-all ease-in duration-75"
            >
              Github
            </a>
            <a
              href="https://twitter.com/0900mihir"
              className="mr-3 ml-3 hover:opacity-80 transition-all ease-in duration-75"
            >
              Twitter
            </a>
            {/* <a href="" className="mr-2"></a> */}
            {/* <a href="" className="mr-2"></a>  */}
          </div>
        </div>
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props, { slug: string }> = async ({
  params,
}) => {
  if (!params) return { props: {} };

  const postPath = path.join(POSTS_PATH, `${params.slug}.mdx`);
  const rawSource = fs.readFileSync(postPath);
  const { content, data } = matter(rawSource);

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  });

  return {
    props: {
      frontmatter: data,
      content: mdxSource,
    },
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: true,
  };
};

export default Post;
