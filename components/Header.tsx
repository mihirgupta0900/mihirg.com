import { useState } from "react";
import Link from "next/link";
import ActiveLink from "./ActiveLink";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div style={{ zIndex: "9999" }} className="sticky top-0 bg-bgc w-full">
      <div className="flex justify-between mx-auto w-1/2 text-gray-700 dark:text-gray-200 h-28 items-center">
        <div className="flex-shrink-0 px-8 py-4 flex flex-row items-center justify-between">
          <Link href="/">
            <a className="text-2xl font-semibold font-heading mx-auto tracking-widest text-gray-900 uppercase rounded-lg dark:text-white focus:outline-none focus:shadow-outline">
              Mihir Gupta
            </a>
          </Link>
          <button
            className="md:hidden rounded-lg focus:outline-none focus:shadow-outline"
            onClick={() => setIsOpen((s) => !s)}
          >
            <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
              <path
                x-show="!open"
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
              <path
                x-show="open"
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <nav
          className={
            "flex-grow md:flex px-4 pb-4 md:pb-0 md:overflow-y-auto justify-end ml-auto" +
            (isOpen ? "block" : "hidden")
          }
        >
          <ActiveLink href="/">Home</ActiveLink>
          <ActiveLink href="/blog">Blog</ActiveLink>
        </nav>
      </div>
    </div>
  );
};

export default Header;
