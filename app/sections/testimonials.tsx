type Props = {
  children: React.ReactNode;
};

const Testimonials = (props: Props) => {
  return (
    <section
      id="testimonials"
      className="section-container flex h-screen flex-col"
    >
      {" "}
      {props.children}
    </section>
  );
};

export default Testimonials;
