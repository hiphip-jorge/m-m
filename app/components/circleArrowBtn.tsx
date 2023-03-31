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

  return button ? (
    <button
      onClick={onClick}
      className={`${className} flex items-center h-12 w-12 rounded-full p-3 button-fill--${
        isDarkMode ? "dark" : "light"
      } ${style === "solid" ? styles.solid : styles.outline}`}
    >
      {arrow_icon(
        style === "solid" ? styles.solidIcon : styles.outlineIcon,
        animate
      )}
    </button>
  ) : (
    <div
      className={`${className} flex items-center h-12 w-12 rounded-full p-3 button-fill--${
        isDarkMode ? "dark" : "light"
      } p-3 ${style === "solid" ? styles.solid : styles.outline}`}
    >
      {arrow_icon(
        style === "solid" ? styles.solidIcon : styles.outlineIcon,
        animate
      )}
    </div>
  );
};

export default CircleArrowBtn;
