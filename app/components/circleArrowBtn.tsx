import { arrow_icon } from "~/utils.svg";

type Props = {
  style?: string;
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
  style = "solid",
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
        className={`${className} rounded-full button-fill--${
          isDarkMode ? "dark" : "light"
        } ${style === "solid" ? styles.solid : styles.outline}`}
      >
        {arrow_icon(style === "solid" ? styles.solidIcon : styles.outlineIcon)}
      </button>
    );
  } else {
    return (
      <div
        className={`${className} rounded-full button-fill--${
          isDarkMode ? "dark" : "light"
        } ${style === "solid" ? styles.solid : styles.outline}`}
      >
        {arrow_icon(style === "solid" ? styles.solidIcon : styles.outlineIcon)}
      </div>
    );
  }
};

export default CircleArrowBtn;
