type Props = {
  children: React.ReactNode;
};

const AboutMe = (props: Props) => {
  return (
    <section id="aboutMe" className="section-container h-screen flex flex-col gap-8">
      {props.children}
    </section>
  );
};

export default AboutMe;
