import { LoaderArgs } from "@remix-run/server-runtime";
import { json, redirect } from "@remix-run/node";
import { getUserId } from "~/session.server";

export async function loader({ request }: LoaderArgs) {
  const userId = await getUserId(request);
  if (!userId) return redirect("/");
  return json({});
}

type Props = {};

const admin = (props: Props) => {
  return <div>Admin works, Yay!</div>;
};

export default admin;
