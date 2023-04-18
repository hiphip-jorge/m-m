import { arrow_icon } from "~/utils.svg";

type Props = {
  circleStyle?: string;
  className?: string;
  button?: boolean;
  animate?: boolean;
  isDarkMode?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const CircleArrowBtn = ({
  button,
  isDarkMode,
  className = "",
  circleStyle = "solid",
  animate,
  onClick = () => {},
}: Props) => {
  let styles = {
    solid: "bg-black dark:bg-[#eee]",
    solidIcon: isDarkMode ? "#222" : "#fff",
    outline:
      "bg-white border-[3.5px] border-black dark:border-[#eee] dark:bg-[#222]",
    outlineIcon: isDarkMode ? "#fff" : "#000",
  };

  if (button) {
    return (
      <button
        onClick={onClick}
        className={`${className} flex rounded-full button-fill--${
          isDarkMode ? "dark" : "light"
        } ${circleStyle === "solid" ? styles.solid : styles.outline}`}
      >
        {arrow_icon(
          circleStyle === "solid" ? styles.solidIcon : styles.outlineIcon,
          animate
        )}
      </button>
    );
  } else {
    return (
      <div
        className={`${className} flex rounded-full button-fill--${
          isDarkMode ? "dark" : "light"
        } ${circleStyle === "solid" ? styles.solid : styles.outline}`}
      >
        {arrow_icon(
          circleStyle === "solid" ? styles.solidIcon : styles.outlineIcon,
          animate
        )}
      </div>
    );
  }
};

export default CircleArrowBtn;
