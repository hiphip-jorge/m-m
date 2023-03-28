// import { useState } from "react";
import photo1 from "~/photos/01.jpg";
import photo2 from "~/photos/02.jpg";
import photo3 from "~/photos/03.jpg";

let stack = [
  { src: photo1, rotate: "rotate-2", zIndex: "z-30" },
  { src: photo2, rotate: "-rotate-2", zIndex: "z-20" },
  { src: photo3, rotate: "rotate-7", zIndex: "z-10" },
];

type Props = {};

const PhotoStack = (props: Props) => {
  //   let [index, setIndex] = useState(0);

  return (
    <button>
      <ul className="h-[300px]">
        {stack.map((photo, idx) => {
          return (
            <li
              key={idx}
              className={`dark:shadow-[#000000bb] absolute left-0 right-0 m-auto w-[248px] border border-gray-100 bg-white p-4 pb-12 shadow-xl dark:border-gray-200 dark:bg-gray-100 ${photo.zIndex} ${photo.rotate}`}
            >
              <img src={photo.src} alt="" />
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