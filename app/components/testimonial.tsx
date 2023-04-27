type Props = {
  quote: string;
  photoSrc: string;
  isDarkMode?: boolean;
};

const Testimonial = (props: Props) => {
  return (
    <article className="flex flex-col gap-4">
      <p className="h-40 text-xl">"{props.quote}"</p>
      <div className="h-[20rem] w-full border-4 border-black">
        {/* <img className="" src={props.photoSrc} alt="custom best pic" /> */}
      </div>
    </article>
  );
};

export default Testimonial;
