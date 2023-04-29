import { Link } from "@remix-run/react";
import Card from "~/components/card";
import Photo1 from "~/photos/02.jpg";

type Props = {};

let categoryLabels = [
  "In Action",
  "Portraits",
  "Weddings",
  "Nature",
  "Culture",
  "Kids",
  "Sports",
];

const Index = (props: Props) => {
  let categoryCardsClass =
    "h-80 w-64 rounded-md bg-[#eee] text-black shadow-2xl dark:bg-[#222] dark:text-white";
  let animation = {
    initial: { opacity: 0, y: 100 },
    whileInView: { opacity: 1, y: 0 },
    exit: { opacity: 0, x: 100 },
    viewport: { once: true },
    transition: { duration: 0.3 },
  };

  return (
    <main>
      <section className="flex flex-col gap-8 py-12 px-10">
        <h1 className="section-header">My Work</h1>
        <ul className="flex flex-wrap items-center justify-center gap-12 text-[#eee]">
          {categoryLabels.map((label, idx) => (
            <li key={idx}>
              <Link to={"./" + label.toLowerCase().replace(" ", "-")}>
                <Card
                  className={categoryCardsClass}
                  label={label}
                  animation={animation}
                  backgroundImage={`url(${Photo1})`}
                />
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default Index;
