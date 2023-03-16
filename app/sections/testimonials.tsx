type Props = {
  children: React.ReactNode;
};

const Testimonials = (props: Props) => {
  return (
    <section className="section-container flex h-screen flex-col">
      {" "}
      {props.children}
    </section>
  );
};

export default Testimonials;
