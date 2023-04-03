import React from "react";
import CircleArrowBtn from "./circleArrowBtn";

type Props = {
  quote: string;
  photoSrc: string;
  isDarkMode?: boolean;
};

const Testimonial = (props: Props) => {
  return (
    <article className="flex flex-col gap-4">
      <p className="text-xl h-40">"{props.quote}"</p>
      <div className="h-[20rem] w-full border-black border-4">
        <img className="" src={props.photoSrc} alt="photo" />
      </div>
    </article>
  );
};

export default Testimonial;
