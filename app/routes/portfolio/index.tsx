import React from "react";

type Props = {};

const Index = (props: Props) => {
  return (
    <main>
      <section className="py-12 px-10 flex flex-col gap-8">
        <h1 className="section-header">My Work</h1>
        <ul className="flex flex-wrap justify-between gap-4 text-[#eee]">
          <li className="h-48 w-32 bg-[#222]">In Action</li>
          <li className="h-48 w-32 bg-[#222]">Portraits</li>
          <li className="h-48 w-32 bg-[#222]">Weddings</li>
        </ul>
      </section>
    </main>
  );
};

export default Index;
