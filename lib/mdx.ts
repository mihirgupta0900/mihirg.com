import path from "path";
import { getPostBySlug } from "./file";
import remarkMdxImages from "remark-mdx-images";

// TODO: Use zod validation
type Frontmatter = {
  title: string;
  date: string;
};

export const prepareMdx = async (
  post: NonNullable<Awaited<ReturnType<typeof getPostBySlug>>>
) => {
  const { bundleMDX } = await import("mdx-bundler");

  if (process.platform === "win32") {
    process.env.ESBUILD_BINARY_PATH = path.join(
      process.cwd(),
      "node_modules",
      "esbuild-windows-64",
      "esbuild.exe"
    );
  } else {
    process.env.ESBUILD_BINARY_PATH = path.join(
      process.cwd(),
      "node_modules",
      "esbuild",
      "bin",
      "esbuild"
    );
  }
  const gfm = await import("remark-gfm");

  const { code, errors, frontmatter } = await bundleMDX<Frontmatter>({
    source: post.rawContents,
    cwd: post.directory,
    mdxOptions: (options, frontmatter) => {
      options.remarkPlugins = [
        ...(options.remarkPlugins ?? []),
        gfm as any,
        remarkMdxImages,
      ];

      return options;
    },
    // esbuildOptions: (options) => {
    //   options.outdir = path.join(process.cwd(), "public", imagesUrl);
    //   options.loader = {
    //     ...options.loader,
    //     ".png": "file",
    //     ".jpg": "file",
    //     ".gif": "file",
    //   };
    //   options.publicPath = imagesUrl;
    //   options.write = true;

    //   return options;
    // },
  });

  if (errors.length > 0) {
    console.dir(errors.map(({ detail }) => detail));
  }

  return {
    code,
    frontmatter,
  };
};
