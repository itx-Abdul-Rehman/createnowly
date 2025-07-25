import { motion } from "framer-motion";

const OurMission = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-14">
        Our Vision
      </h2>

      {/* First line: appear from right on scroll */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
        className="text-lg md:text-xl mb-2"
      >
        To empower businesses worldwide with cutting‑edge digital solutions,
      </motion.div>

      {/* Middle line: fade in on scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: false, amount: 0.3 }}
        className="text-lg md:text-xl mb-2"
      >
        transforming ideas into experiences that drive growth,
      </motion.div>

      {/* Last line: appear from left on scroll */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: false, amount: 0.3 }}
        className="text-lg md:text-xl mb-2"
      >
        innovation, and lasting impact.
      </motion.div>
    </div>
  );
};

export default OurMission;
