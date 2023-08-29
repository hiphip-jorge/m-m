import { NavLink } from "@remix-run/react";
import React from "react";

type Props = {
  onClick?: () => void;
};

const Logo = (props: Props) => {
  return (
    <button onClick={props.onClick}>
      <NavLink to="./">
        <p className="text-[2rem] font-bold">MM</p>
      </NavLink>
    </button>
  );
};

export default Logo;
