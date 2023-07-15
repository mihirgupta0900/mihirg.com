import { readFile } from "fs/promises";
import path from "path";

/**
 * The directory where the posts are located.
 */
export const POSTS_DIRECTORY = path.join(process.cwd(), "_content", "posts");

/**
 * Get the file contents and directory of a file.
 */
export const getFile = async (filePath: string) => {
  try {
    const rawContents = (await readFile(filePath)).toString();
    const directory = path.dirname(filePath);

    return {
      rawContents,
      directory,
    } as const;
  } catch (error) {
    return null;
  }
};

/**
 * Get a post content by its slug.
 */
export const getPostBySlug = (slug: string) => {
  const filePath = path.join(POSTS_DIRECTORY, `${slug}.mdx`);

  return getFile(filePath);
};
