type Props = {
  children: React.ReactNode;
};

const PortfolioPreview = (props: Props) => {
  return (
    <section className="section-container flex h-screen flex-col gap-4">
      {props.children}
    </section>
  );
};

export default PortfolioPreview;
