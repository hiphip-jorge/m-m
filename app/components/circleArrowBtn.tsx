import { arrow_icon } from "~/utils.svg";

type Props = {
  isDarkMode?: boolean;
  style?: string;
  button?: boolean;
};

const CircleArrowBtn = ({ button, isDarkMode, style = "solid" }: Props) => {
  let styles = {
    solid: "bg-black dark:bg-[#eee]",
    solidIcon: isDarkMode ? "#222" : "#fff",
    outline:
      "bg-white border-[3.5px] border-black dark:border-[#eee] dark:bg-[#222]",
    outlineIcon: isDarkMode ? "#fff" : "#000",
  };

  return button ? (
    <button
      className={`h-12 w-12 rounded-full p-3 ${
        style === "solid" ? styles.solid : styles.outline
      }`}
    >
      {arrow_icon(style === "solid" ? styles.solidIcon : styles.outlineIcon)}
    </button>
  ) : (
    <div
      className={`h-12 w-12 rounded-full p-3 ${
        style === "solid" ? styles.solid : styles.outline
      }`}
    >
      {arrow_icon(style === "solid" ? styles.solidIcon : styles.outlineIcon)}
    </div>
  );
};

export default CircleArrowBtn;
