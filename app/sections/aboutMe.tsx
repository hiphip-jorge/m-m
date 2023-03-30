type Props = {
  children: React.ReactNode;
};

const AboutMe = (props: Props) => {
  return (
    <section id="aboutMe" className="section-container flex flex-col gap-4">
      {props.children}
    </section>
  );
};

export default AboutMe;
