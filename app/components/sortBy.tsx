export default function SortBy() {
  return (
    <aside className="mt-4 p-4">
      <ul className="flex gap-3 font-playfair font-bold">
        <li className="flex w-20 items-center justify-center rounded-md border-2 border-[#222] p-2 text-xs">
          All
        </li>
        <li className="flex w-20 items-center justify-center rounded-md border-2 border-[#222] p-2 text-xs">
          Categories
        </li>
        <li className="flex w-20 items-center justify-center rounded-md border-2 border-[#222] p-2 text-xs">
          Recent
        </li>
      </ul>
    </aside>
  );
}
