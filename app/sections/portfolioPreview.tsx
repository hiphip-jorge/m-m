type Props = {
  children: React.ReactNode;
};

const PortfolioPreview = (props: Props) => {
  return (
    <section
      id="portfolioPreview"
      className=" flex h-screen flex-col justify-between"
    >
      {props.children}
    </section>
  );
};

export default PortfolioPreview;
