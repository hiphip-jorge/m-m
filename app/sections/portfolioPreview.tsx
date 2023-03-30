type Props = {
  children: React.ReactNode;
};

const PortfolioPreview = (props: Props) => {
  return (
    <section
      id="portfolioPreview"
      className="section-container flex flex-col gap-4"
    >
      {props.children}
    </section>
  );
};

export default PortfolioPreview;
