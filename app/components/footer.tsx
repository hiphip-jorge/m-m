import Logo from "./logo";
import Socials from "./socials";

type Props = {
  isDark?: boolean;
};

const Footer = (props: Props) => {
  return (
    <footer className="footer-sm">
      <Logo />
      <Socials isDark={props.isDark} solid />
      <a href="mailto:someone@example.com" className="mt-6 text-lg underline">
        myemail@example.com
      </a>
      <div className="mt-8">
        <p className="text-sm">Based in Dallas, TX</p>
        <p className="text-sm">copyright © 2023 all rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
