import { facebook_icon, tiktok_icon } from "~/utils.svg";

type Props = {
  isDark?: boolean;
};

const Socials = (props: Props) => {
  let iconColor = props.isDark ? "#eee" : "";
  return (
    <ul className="flex gap-8">
      <li className="h-12 w-12 rounded-full border-[3.5px] border-black dark:border-[#eee]">
        <a href="." className="flex h-full">
          {facebook_icon(iconColor)}
        </a>
      </li>
      {/* <li className="h-12 w-12 rounded-full border-[3.5px] border-black dark:border-[#eee]">
        <a href="." className="flex h-full">
          {instagram_icon(iconColor)}
        </a>
      </li> */}
      <li className="h-12 w-12 rounded-full border-[3.5px] border-black dark:border-[#eee]">
        <a href="." className="flex h-full">
          {tiktok_icon(iconColor)}
        </a>
      </li>
    </ul>
  );
};

export default Socials;
