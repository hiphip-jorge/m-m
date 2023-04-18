const AboutSection = () => {
  return (
    <section
      id="AboutSection"
      className="section-container flex h-screen flex-col justify-between"
    >
      <div className="flex h-[350px] whitespace-nowrap">
        <div className="section-header z-10 h-fit">
          <h1 className="mb-2 w-fit bg-white pr-4 dark:bg-[#222]">Hi,</h1>
          <h1 className="mb-2 w-fit bg-white pr-4 dark:bg-[#222]">I'm Tia</h1>
          <h1 className="mb-2 w-fit bg-white pr-4 dark:bg-[#222]">Trini</h1>
        </div>

        <div className="">
          <span className="absolute right-0 flex h-[350px] w-[306px] items-center justify-center bg-black text-white">
            Photo
          </span>
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
