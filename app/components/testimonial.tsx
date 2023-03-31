import React from "react";
import CircleArrowBtn from "./circleArrowBtn";

type Props = {
  quote: string;
  photoSrc: string;
  isDarkMode?: boolean;
};

const Testimonial = (props: Props) => {
  return (
    <article className="flex flex-col gap-8">
      <p className="text-2xl h-48">"{props.quote}"</p>
      <div className="h-[26rem] w-full border-black border-4">
        <img className="" src={props.photoSrc} alt="photo" />
      </div>
    </article>
  );
};

export default Testimonial;
