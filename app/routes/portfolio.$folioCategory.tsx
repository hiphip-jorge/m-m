import { useParams } from "@remix-run/react";
import { useState } from "react";
import Card from "~/components/card";
import Modal from "~/components/modal";
import Photo1 from "~/photos/02.jpg";

type Props = {};

let photos = ["photo1", "photo2", "photo3", "photo4", "photo5"];

const Index = (props: Props) => {
  let { folioCategory } = useParams();
  let [modalOpen, setModalOpen] = useState(false);

  let categoryCardsClass =
    "h-80 w-64 rounded-md bg-[#eee] text-black shadow-2xl dark:bg-[#222] dark:text-white";
  let animation = {
    initial: { opacity: 0, y: 100 },
    whileInView: { opacity: 1, y: 0 },
    exit: { opacity: 0, x: 100 },
    viewport: { once: true },
    transition: { duration: 0.3 },
  };

  let close = () => {
    document.querySelector("body")?.classList.remove("overflow-hidden");
    setModalOpen(false)
  };
  let open = () => {
    document.querySelector("body")?.classList.add("overflow-hidden");
    setModalOpen(true)
  };

  return (
    <main>
      <section className="flex flex-col gap-8 py-12 px-10">
        <h1 className="section-header capitalize">
          {folioCategory?.replace("-", " ")}
        </h1>
        <ul className="flex flex-wrap items-center justify-center gap-12 text-[#eee]">
          {photos.map((photoName) => (
            <li key={photoName} onClick={() => (modalOpen ? close() : open())}>
              <Card
                className={categoryCardsClass}
                animation={animation}
                backgroundImage={`url(${Photo1})`}
              />
            </li>
          ))}
        </ul>
      </section>

      {modalOpen && <Modal selectedPhoto={Photo1} handleClose={close} />}
    </main>
  );
};

export default Index;
