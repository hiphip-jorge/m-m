import React from "react";
import Socials from "./socials";

type Props = {
  children?: React.ReactNode;
  isDarkMode: boolean;
};

const MobileMenu = (props: Props) => {
  return (
    <aside className="fixed top-0 bottom-0 left-0 right-0 z-10 bg-white dark:bg-[#222]">
      {props.children}
      <div className="flex h-[calc(100vh-64px)]  flex-col justify-between">
        <main className="p-12 text-[2rem] text-black dark:text-[#eee]">
          <ul className="flex flex-col gap-6">
            <li>About Me</li>
            <li>Portfolio</li>
            <li>Testimonials</li>
          </ul>
        </main>
        <footer className="self-center p-10">
          <Socials isDark={props.isDarkMode} />
        </footer>
      </div>
    </aside>
  );
};

export default MobileMenu;
