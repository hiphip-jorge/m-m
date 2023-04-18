type Props = {
  children: React.ReactNode;
};

const AboutMe = (props: Props) => {
  return (
    <section
      id="aboutMe"
      className="section-container flex h-screen flex-col justify-between"
    >
      {props.children}
    </section>
  );
};

export default AboutMe;
