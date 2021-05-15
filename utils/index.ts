import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { FileMeta, Meta } from "./interfaces";
import { format } from "date-fns";

export const isEmail = (email: string): boolean => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const root = process.cwd();

export const getAllBlogs = async () => {
  const files = fs.readdirSync(path.join(root, "pages", "blog"));

  return files.reduce((allPosts: FileMeta[], fileName) => {
    const content = fs.readFileSync(
      path.join(root, "pages", "blog", fileName),
      "utf-8"
    );
    const data = matter(content).data as Meta;

    return [
      {
        ...data,
        date:format(  data.date, 'do MMMM, yyyy')
        slug: fileName.replace(".mdx", ""),
      },
      ...allPosts,
    ];
  }, []);
};
