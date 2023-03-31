import { useState } from "react";
import CircleArrowBtn from "~/components/circleArrowBtn";
import Testimonial from "~/components/testimonial";

type Props = {
  children: React.ReactNode;
  isDarkMode?: boolean;
};

let testimonialArr = [
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur. Sapien viverra sed purus dignissim diam dictum donec gravida.",
    photoSrc: "./",
  },
  {
    quote:
      "ipsum dolor sit amet consectetur. Sapien viverra sed purus dignissim diam dictum donec gravida.",
    photoSrc: "./",
  },
  {
    quote:
      "dolor sit amet consectetur. Sapien viverra sed purus dignissim diam dictum donec gravida.",
    photoSrc: "./",
  },
];

const Testimonials = (props: Props) => {
  let [testIdx, setTestIdx] = useState(0);

  return (
    <section
      id="testimonials"
      className="section-container flex h-screen flex-col gap-4"
    >
      {props.children}
      <div>
        <Testimonial
          quote={testimonialArr[testIdx].quote}
          photoSrc={testimonialArr[testIdx].photoSrc}
          isDarkMode={props.isDarkMode}
        />
        <CircleArrowBtn
          onClick={() =>
            setTestIdx((prev) => (prev + 1) % testimonialArr.length)
          }
          className="absolute right-0 -translate-x-12 -translate-y-36"
          isDarkMode={props.isDarkMode}
          button
        />
      </div>
      <ul className="flex gap-2 self-center flex-wrap">
        {testimonialArr.map((item, idx) => {
          return (
            <li
              key={idx}
              className={`h-4 w-4 rounded-full  ${
                idx == testIdx
                  ? "border-4 border-black dark:border-[#eee]"
                  : "bg-black dark:bg-[#eee]"
              }`}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Testimonials;
