import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { FrontMatter, Post } from "./interfaces";
import { postFilePaths, POSTS_PATH } from "./mdx";

export const isEmail = (email: string): boolean => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export const getAllBlogs = async (): Promise<Post[]> => {
  const posts = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
    const { content, data } = matter(source);

    return {
      content,
      frontmatter: data as FrontMatter,
      filePath,
    };
  });

  return posts;
};
