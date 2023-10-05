import { useEffect, useState } from "react";
import type { LinksFunction, LoaderArgs } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useRevalidator,
} from "@remix-run/react";
import {
  createBrowserClient,
  createServerClient,
} from "@supabase/auth-helpers-remix";

import Navbar from "./components/navbar";
import Footer from "./components/footer";

import favicon from "./assets/favicon.svg";
import tailwindStylesheetUrl from "./styles/tailwind.css";
import TransitionAnimation from "./components/transitionAnimation";

export type ContextType = {
  isDarkMode: boolean;
  isMenuOpen: boolean;
  theme: { iconColor: string };
  toggleMobileMenu: () => void;
};

const lexendFontURL =
  "https://fonts.googleapis.com/css2?family=Lexend:wght@400;700&display=swap";
const playfairUrl =
  "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap";

export const links: LinksFunction = () => {
  return [
    { rel: "icon", href: favicon },
    { rel: "stylesheet", href: lexendFontURL },
    { rel: "stylesheet", href: playfairUrl },
    { rel: "stylesheet", href: tailwindStylesheetUrl },
  ];
};

export async function loader({ request }: LoaderArgs) {
  const env = {
    SUPABASE_URL: process.env.SUPABASE_URL!,
    SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY!,
  };

  const response = new Response();

  const supabase = createServerClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_ANON_KEY!,
    {
      request,
      response,
    }
  );

  const {
    data: { session },
  } = await supabase.auth.getSession();

  return { env, session, headers: response.headers };
}

export default function App() {
  const { env, session } = useLoaderData();
  const { revalidate } = useRevalidator();

  const [supabase] = useState(() =>
    createBrowserClient(env.SUPABASE_URL!, env.SUPABASE_ANON_KEY!)
  );

  const serverAccessToken = session?.access_token;

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (
        event !== "INITIAL_SESSION" &&
        session?.access_token !== serverAccessToken
      ) {
        // server and client are out of sync.
        revalidate();
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [serverAccessToken, supabase, revalidate]);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-gradient-light bg-gradient-dark bg-gradient-to-br bg-no-repeat dark:text-[#eee]">
        <TransitionAnimation>
          {/* <ProgressBar /> */}
          <Navbar supabaseClient={supabase} />
          <Outlet context={supabase} />
          <Footer />
        </TransitionAnimation>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
