// import { useState } from "react";
import photo1 from "~/photos/01.jpg";
import photo2 from "~/photos/02.jpg";
import photo3 from "~/photos/03.jpg";

let stack = [
  { src: photo1, rotate: "rotate-2", zIndex: "z-30", transX: "translate-x-0" },
  {
    src: photo2,
    rotate: "-rotate-2",
    zIndex: "z-20",
    transX: "-translate-x-12",
  },
  { src: photo3, rotate: "rotate-7", zIndex: "z-10", transX: "translate-x-12" },
];

type Props = {};

const PhotoStack = (props: Props) => {
  //   let [index, setIndex] = useState(0);

  return (
    <button>
      <ul className="h-[250px] w-1">
        {stack.map((photo, idx) => {
          return (
            <li
              key={idx}
              className={`absolute left-0 right-0 m-auto w-[250px] -translate-x-12 border 
                border-gray-100 bg-white shadow-xl dark:border-gray-200 dark:bg-gray-100
                dark:shadow-[#000000bb] z-${(stack.length - idx) * 10} ${
                photo.rotate
              } translate-x-${12 * idx}`}
            >
              <img src={photo.src} loading="lazy" alt="" />
            </li>
          );
        })}
      </ul>
    </button>
  );
};

export default PhotoStack;

// function rotateRandom(min: number, max: number) {
//   let degree = Math.floor(Math.random() * (max - min + 1) + min);
//   degree = degree === 0 ? degree + 1 : degree;
//   return degree < 0 ? "-rotate-" + Math.abs(degree) : "rotate-" + degree;
// }
