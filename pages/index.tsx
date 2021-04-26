import Head from "next/head";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="md:flex flex-col md:flex-row md:min-h-screen w-full text-white">
      <Header />
      <div className="w-full flex flex-col">
        <div className="flex flex-col w-full items-center">
          <h1 className="text-6xl mt-20 font-heading font-medium">
            Hey! I'm Mihir
          </h1>
          <p className="w-1/2 mt-6 text-center text-xl">
            Welcome to my home in the cloud. I build software, write blogs and
            share what I learn from books, people and experiences.
          </p>
        </div>
        <div className="mx-auto w-10/12 mt-10">
          <div className="text-5xl text-accent font-heading font-bold">
            Blogs
          </div>
        </div>
        {/* <div className="w-1/2 flex-col justify-around py-6 items-center dark:bg-dp01 rounded-lg mt-6 flex">
          <div className="text-center">
            <h3 className="text-3xl">Want to know when I post a new blog?</h3>
            <p className="text-base">
              Sign up for my newsletter to stay up to date.
            </p>
          </div>
          <div className="mt-6 w-full flex justify-center">
            <input
              type="text"
              className="rounded-md py-2 px-4 mr-4 w-1/3 bg-dp24 shadow-dp24 focus:outline-none"
            />
            <button className="bg-accent text-gray-900 px-4 py-2 rounded-md font-medium">
              Subscribe
            </button>
          </div>
          <div className=""></div>
        </div> */}
      </div>
    </div>
  );
}
