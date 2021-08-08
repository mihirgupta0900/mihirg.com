import { FC } from "react";
import Header from "./Header";

const Layout: FC = ({ children }) => {
  return (
    <div className="flex flex-col w-full dark:text-white">
      <Header />
      <main className="flex text-xl flex-col md:mx-auto md:w-2/5 px-4 w-full">
        {children}
      </main>
    </div>
  );
};

export default Layout;
