import { motion } from "framer-motion";
import React from "react";
import { ThreeDots } from "react-loader-spinner";

export default function Spinner() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="h-screen flex justify-center items-center"
    >
      <ThreeDots
        height="180"
        width="180"
        radius="9"
        color="#7289da"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        visible={true}
      />
    </motion.div>
  );
}
