import { useLoaderData } from "@remix-run/react";
import { LoaderArgs } from "@remix-run/node";
import { createServerClient } from "@supabase/auth-helpers-remix";

import SortBy from "~/components/sortBy";

// https://ptqtaxtrjxniohmxxmfb.supabase.co/storage/v1/object/sign/test_photos/01.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ0ZXN0X3Bob3Rvcy8wMS5qcGciLCJpYXQiOjE2OTY1MjY2NTAsImV4cCI6MTY5NzEzMTQ1MH0.04pb4Y23eQK2ZjT-Gcmuthc2RUnSUqA4HPCGRiwlZuU&t=2023-10-05T17%3A24%3A10.603Z

export const loader = async ({ request }: LoaderArgs) => {
  const response = new Response();
  try {
    const supabase = createServerClient(
      process.env.SUPABASE_URL!,
      process.env.SUPABASE_ANON_KEY!,
      { request, response }
    );

    const { data } = await supabase.storage.from("test_photos").list("", {
      limit: 20,
      offset: 0,
      sortBy: { column: "name", order: "asc" },
    });

    return { data, headers: response.headers };
  } catch (e) {
    console.log("process.env.SUPABASE_URL", process.env.SUPABASE_URL);
    return { data: "" };
  }
};

export default function Index() {
  const { data } = useLoaderData();

  return (
    <div>
      <SortBy />
      <main className="mx-auto mb-8 mt-2 w-fit">
        <ul className="grid grid-cols-2 grid-rows-masonry gap-3">
          {/* {data.map((photo: any, idx: number) => (
            <li key={idx}>{idx}</li>
          ))} */}
        </ul>
      </main>
    </div>
  );
}
