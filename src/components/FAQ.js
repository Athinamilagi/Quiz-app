import React from "react";
import Accordion from "./Accordion";

const FAQ = () => {
  return (
    <div className="mt-150 ml-50">
      <span className="text-4xl font-bold leading-58 tracking-tighter bg-gradient-to-b from-blue-900 to-blue-500 text-transparent">
        FAQ
      </span>
      <Accordion />
    </div>
  );
};

export default FAQ;
