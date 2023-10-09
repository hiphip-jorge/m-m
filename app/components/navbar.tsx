import { NavLink, useOutletContext } from "@remix-run/react";
import { SupabaseClient } from "@supabase/supabase-js";
import { useState } from "react";
import { Database } from "~/database.types";

// type Props = {
//   supabaseClient: SupabaseClient<Database>;
// };

const Navbar = () => {
  // const [isAuth, setAuth] = useState(false);
  // const supabase = supabaseClient;

  // const handleSignIn = async () => {
  //   await supabase.auth
  //     .signInWithPassword({
  //       email: "jorgeperez.inbox@gmail.com",
  //       password: "password",
  //     })
  //     .then(() => setAuth(true));
  // };

  // const handleLogout = async () => {
  //   await supabase.auth.signOut().then(() => setAuth(false));
  // };

  return (
    <nav>
      <div className="navbar">
        <span className="font-playfair text-3xl">MM</span>
        <ul className="flex gap-3">
          <NavLink
            className="flex h-12 w-12 items-center justify-center rounded-md bg-[#eee] text-xl"
            to="/about"
          >
            Me
          </NavLink>
          <NavLink
            to="/testimonials"
            className="flex h-12 w-12 items-center justify-center rounded-md bg-[#eee]"
          >
            {/* {quote_icon("#222")} */}
            ""
          </NavLink>

          <NavLink
            to="/"
            className={
              "flex h-12 w-12 items-center justify-center gap-[0.2rem] rounded-md bg-[#eee] px-2 py-1"
            }
          >
            {gallery_icon}
          </NavLink>
        </ul>
      </div>
      {/* <div className="flex items-center justify-end px-4 text-xs">
        {isAuth ? (
          <button
            className="rounded-md  border-2 border-red-400 bg-red-300 p-2  font-lexend text-xs text-[#222]"
            onClick={handleLogout}
          >
            Log out
          </button>
        ) : (
          <button
            className="rounded-md border-2 border-green-400 bg-green-300 p-2 font-lexend text-[#222]"
            onClick={handleSignIn}
          >
            Sign in
          </button>
        )}
      </div> */}
    </nav>
  );
};

export default Navbar;

const gallery_icon = (
  <>
    <ul className="mt-1 flex  flex-col items-center justify-center gap-[0.2rem]">
      <li className="h-4 w-3 rounded-sm bg-[#222]"></li>
      <li className="h-4 w-3 rounded-sm bg-[#222]"></li>
    </ul>
    <ul className="flex flex-col items-start justify-center gap-[0.2rem]">
      <li className="h-4 w-3 rounded-sm bg-[#222]"></li>
      <li className="h-4 w-3 rounded-sm bg-[#222]"></li>
    </ul>
  </>
);
