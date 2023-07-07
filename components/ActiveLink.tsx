import Link from "next/link";
import { FC, PropsWithChildren } from "react";
import { useRouter } from "next/router";

const isSamePage = (first: string, second: string): boolean => {
  if (first === "/" && second === "/") {
    return true;
  } else {
    const arr1 = first.split("/").filter(Boolean);
    const arr2 = second.split("/").filter(Boolean);
    return Boolean(arr1.filter((item) => arr2.includes(item)).length);
  }
};

const ActiveLink: FC<PropsWithChildren<{ href: string }>> = ({
  href,
  children,
}) => {
  const router = useRouter();
  return (
    <Link
      href={href}
      className={`text-xl transition-all ease-in duration-100 mr-2 ml-2 ${
        isSamePage(router.asPath, href) ? "text-accent" : "hover:text-accent"
      }`}
    >
      {children}
    </Link>
  );
};

export default ActiveLink;
