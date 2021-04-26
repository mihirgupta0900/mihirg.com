import { FC } from "react";
import Header from "./Header";

const Layout: FC = ({ children }) => {
  return (
    <div className="md:flex flex-col md:flex-row md:min-h-screen w-full dark:text-white">
      <Header />
      <div className="md:w-4/5 md:ml-auto">
        <main className="w-full flex flex-col">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
