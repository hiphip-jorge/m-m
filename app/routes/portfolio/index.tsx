import { motion } from "framer-motion";

type Props = {};

const Index = (props: Props) => {
  return (
    <main>
      <section className="flex flex-col gap-8 py-12 px-10">
        <h1 className="section-header">My Work</h1>
        <ul className="flex flex-wrap items-center justify-center gap-12 text-[#eee]">
          <motion.li
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.3 }}
            className="h-80 w-64 rounded-md bg-[#222]"
          >
            In Action
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.3 }}
            className="h-80 w-64 rounded-md bg-[#222]"
          >
            Portraits
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.3 }}
            className="h-80 w-64 rounded-md bg-[#222]"
          >
            Weddings
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.3 }}
            className="h-80 w-64 rounded-md bg-[#222]"
          >
            Nature
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.3 }}
            className="h-80 w-64 rounded-md bg-[#222]"
          >
            Culture
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.3 }}
            className="h-80 w-64 rounded-md bg-[#222]"
          >
            Kids
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.3 }}
            className="h-80 w-64 rounded-md bg-[#222]"
          >
            Sports
          </motion.li>
        </ul>
      </section>
    </main>
  );
};

export default Index;
