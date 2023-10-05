import { useState } from "react";

export default function SortBy() {
  const [active, setActive] = useState(0);
  const sortByList = ["All", "Categories", "Recent"];

  return (
    <aside className="p-4">
      <ul className="flex gap-3 font-lexend font-bold">
        {sortByList.map((sortBy, idx) => {
          return (
            <button
              key={idx}
              className={`rounded-md ${
                active === idx
                  ? "bg-[#222] text-[#eee]"
                  : " border-2 border-[#222]"
              }`}
              onClick={() => setActive(idx)}
            >
              <li className="flex w-20 items-center justify-center p-2 text-xs">
                {sortBy}
              </li>
            </button>
          );
        })}
      </ul>
    </aside>
  );
}
