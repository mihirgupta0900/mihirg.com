import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface AnchorProps extends Props {
  href?: string;
}

const components: Record<string, ReactNode> = {
  h2: ({ children }: Props) => (
    <h2
      className="text-3xl mt-8 mb-4 font-bold"
      id={(children as string).toLowerCase().replace(/\s/g, "-")}
    >
      {children}
    </h2>
  ),
  h3: ({ children }: Props) => (
    <h3
      className="text-2xl mt-8 mb-4 font-bold"
      id={(children as string).toLowerCase().replace(/\s/g, "-")}
    >
      {children}
    </h3>
  ),
  p: ({ children }: Props) => <p className="my-5">{children}</p>,
  a: ({ children, href }: AnchorProps) => (
    <a className="text-accent underline hover:text-accentHover" href={href}>
      {children}
    </a>
  ),
};

export default components;
