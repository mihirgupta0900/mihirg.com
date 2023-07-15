import clsx from "clsx";
import { getMDXComponent } from "mdx-bundler/client";
import {
  ComponentPropsWithoutRef,
  ComponentType,
  PropsWithChildren,
  useMemo,
} from "react";
import slugify from "slugify";
import { log } from "../../lib/log";

export const MDX: React.FC<{ source: string }> = ({ source }) => {
  const Component = useMemo(() => getMDXComponent(source), [source]);

  return (
    <Component
      components={{
        p: ({ children }) => <p className="my-5">{children}</p>,
        h1: ({ children }) => <Heading as="h1">{children}</Heading>,
        h2: ({ children }) => <Heading as="h2">{children}</Heading>,
        h3: ({ children }) => <Heading as="h3">{children}</Heading>,
        a: ({ children, href }) => (
          <a
            className="text-accent underline hover:text-accentHover"
            href={href}
          >
            {children}
          </a>
        ),
        ul: ({ children, ...props }) => (
          <ul className="list-outside list-disc" {...props}>
            {children}
          </ul>
        ),
        // TODO: code block
      }}
    />
  );
};

type HeadingType = ("h1" | "h2" | "h3") | ComponentType;

const Heading = ({
  as,
  children,
  ...rest
}: PropsWithChildren<
  { as: HeadingType } & ComponentPropsWithoutRef<HeadingType>
>) => {
  const Comp = as || "h1";

  let id = "";
  if (typeof children === "string") {
    id = slugify(children, {
      lower: true,
    });
  }

  return (
    <Comp
      id={id}
      className={clsx(
        "mt-8 mb-4 font-bold",
        Comp.toString() === "h3" ? "text-2xl" : "text-3xl "
      )}
      {...rest}
    >
      {id && (
        <a href={`#${id}`} className="mr-2">
          #
        </a>
      )}
      <span>{children}</span>
    </Comp>
  );
};

const P = () => <Heading as="h1" />;
