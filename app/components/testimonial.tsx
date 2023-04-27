import { AnimatePresence } from "framer-motion";
import TransitionAnimation from "./transitionAnimation";

type Props = {
  quote: string;
  photoSrc: string;
  isDarkMode?: boolean;
};

const Testimonial = (props: Props) => {
  return (
    <article className="flex flex-col gap-4">
      <AnimatePresence
        mode="wait"
        onExitComplete={() => console.log("exit complete")}
      >
        <TransitionAnimation>
          <p className="h-40 text-xl">"{props.quote}"</p>
          <div className="h-[20rem] w-full border-4 border-black">
            {/* <img className="" src={props.photoSrc} alt="custom best pic" /> */}
          </div>
        </TransitionAnimation>
      </AnimatePresence>
    </article>
  );
};

export default Testimonial;
