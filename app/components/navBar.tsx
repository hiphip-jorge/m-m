import sun from "~/assets/sun-regular.svg";

type Props = {};

const NavBar = (props: Props) => {
  return (
    <div className="flex items-center justify-between p-3 font-lexend font-bold text-4xl">
      <span>|&|</span>
      <span>M&M</span>
      <span className="w-8">
        <img src={sun} alt="" />
      </span>
    </div>
  );
};

export default NavBar;
