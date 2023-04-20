import photo3 from "~/photos/03.jpg";

const AboutSection = () => {
  return (
    <section
      id="AboutSection"
      className="section-container flex h-screen flex-col justify-between"
    >
      <div className="flex h-[350px] whitespace-nowrap">
        <div className="section-header z-10 h-fit">
          <h1 className="mb-2 w-fit bg-white pr-4 dark:bg-[#222]">Hi,</h1>
          <h1 className="mb-2 w-fit bg-white pr-4 dark:bg-[#222]">I'm M.</h1>
          <h1 className="mb-2 w-fit bg-white pr-4 dark:bg-[#222]">Monistere</h1>
        </div>

        <div className="">
          <img className="absolute right-0 w-[260px] " src={photo3} alt="" />
        </div>
      </div>
      <article>
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ullam
          nemo, laborum ea hic voluptatem libero optio! laborum ea hic
          voluptatem libero optio!
        </p>
      </article>{" "}
    </section>
  );
};

export default AboutSection;
