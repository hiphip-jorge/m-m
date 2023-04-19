import Socials from "./socials";

type Props = {
  isDark?: boolean;
};

const Footer = (props: Props) => {
  return (
    <footer className="section-container flex flex-col items-center bg-[#222] text-center text-[#eee] dark:bg-[#eee] dark:text-[#222]">
      <span className="mb-6 text-[2rem] font-bold">M&M</span>
      <Socials isDark={props.isDark} solid />
      <a href="mailto:someone@example.com" className="mt-6 underline text-lg">
        myemail@example.com
      </a>
      <div className="mt-12">
        <p className="text-sm">Based in Dallas, TX</p>
        <p className="text-sm">copyright © 2023 all rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
