import React, { useState } from "react";

const Accordion = () => {
  const [openIndex, setIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const items = [
    {
      header: "Can education flashcards be used for all age groups?",
      content: "Content for Section 1",
    },
    {
      header: "How do education flashcards work?",
      content: "Content for Section 2",
    },
    {
      header: "Can education flashcards be used for test preparation?",
      content: "Content for Section 3",
    },
  ];

  return (
    <div className="w-full max-w-848 mx-auto bg-white p-10 rounded-12">
      {items.map((item, index) => (
        <div key={index} className="mb-8">
          <button
            className="flex justify-between items-center w-full text-left bg-gray-100 p-5 rounded-t-12"
            onClick={() => handleAccordionClick(index)}
          >
            <span>{item.header}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className={`w-6 h-6 transform ${
                openIndex === index ? "rotate-180" : ""
              }`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <div
            className={`p-5 overflow-hidden rounded-b-12 ${
              openIndex === index ? "h-auto" : "h-0"
            }`}
          >
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;