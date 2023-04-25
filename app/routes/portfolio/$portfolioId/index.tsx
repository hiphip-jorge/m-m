import { useParams } from "@remix-run/react";

type Props = {};

const index = (props: Props) => {
  let { portfolioId } = useParams();

  return <div className="h-screen">{portfolioId}</div>;
};

export default index;
