import { MDXProviderComponentsProp } from "@mdx-js/react";

const components: MDXProviderComponentsProp = {
  h2: ({ children }) => (
    <h2
      className="text-3xl mt-8 mb-4 font-bold"
      id={(children as string).toLowerCase().replace(/\s/g, "-")}
    >
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3
      className="text-2xl mt-8 mb-4 font-bold"
      id={(children as string).toLowerCase().replace(/\s/g, "-")}
    >
      {children}
    </h3>
  ),
  p: ({ children }) => <p className="my-5">{children}</p>,
  a: ({ children, href }) => (
    <a className="text-accent underline hover:text-accentHover" href={href}>
      {children}
    </a>
  ),
};

export default components;
