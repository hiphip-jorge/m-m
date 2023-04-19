import { facebook_icon, tiktok_icon } from "~/utils.svg";

type Props = {
  isDark?: boolean;
  solid?: boolean;
};

const Socials = (props: Props) => {
  let iconColor;
  let style = props.solid
    ? "bg-[#eee] dark:bg-[#222]"
    : "border-[3.5px] border-[#222] dark:border-[#eee]";

  if (props.solid && props.isDark) {
    iconColor = "#eee";
  } else if (props.solid && !props.isDark) {
    iconColor = "#222";
  } else if (!props.solid && props.isDark) {
    iconColor = "#eee";
  } else {
    iconColor = "#222";
  }

  return (
    <ul className="flex gap-8">
      <li className={`h-12 w-12 rounded-full ${style}`}>
        <a href="." className="flex h-full">
          {facebook_icon(iconColor)}
        </a>
      </li>
      {/* <li className="h-12 w-12 rounded-full border-[3.5px] border-[#222] dark:border-[#eee]">
        <a href="." className="flex h-full">
          {instagram_icon(props.solid ? )}
        </a>
      </li> */}
      <li className={`h-12 w-12 rounded-full ${style}`}>
        <a href="." className="flex h-full">
          {tiktok_icon(iconColor)}
        </a>
      </li>
    </ul>
  );
};

export default Socials;
