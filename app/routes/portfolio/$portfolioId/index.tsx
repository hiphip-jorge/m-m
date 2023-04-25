import { useParams } from "@remix-run/react";

type Props = {};

const Index = (props: Props) => {
  let { portfolioId } = useParams();

  return <div className="h-screen">{portfolioId}</div>;
};

export default Index;
