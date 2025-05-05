import { useState, useEffect } from "react";
import { FaChevronDown, FaChevronUp, FaQuestionCircle } from "react-icons/fa";
import SectionHeader from "../SectionHeader";

const AccordionItem = ({ faq, isOpen, onClick }) => {
  return (
    <div className="border border-gray-300 rounded-lg overflow-hidden bg-gradient-to-r from-blue-600 to-blue-900">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center px-6 py-4 text-left text-white hover:bg-opacity-80 transition-all duration-200"
      >
        <div className="flex items-center gap-2 text-lg font-semibold">
          <FaQuestionCircle className="text-yellow-400" />
          {faq.question}
        </div>
        {isOpen ? (
          <FaChevronUp className="text-yellow-400" />
        ) : (
          <FaChevronDown className="text-yellow-400" />
        )}
      </button>

      <div
        className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[500px] py-3 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-gray-100 text-base leading-relaxed">{faq.answer}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [faqs, setFaqs] = useState([]);
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    fetch("faqs.json")
      .then((res) => res.json())
      .then((data) => setFaqs(data));
  }, []);

  const toggleAccordion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-12 text-blue-900">
      <div className="bg-white p-6 rounded-2xl shadow-lg">
        <SectionHeader
          title="Frequently Asked Questions"
          subTitle="Your Queries, Answered – Everything You Need to Know at a Glance!"
          color="primary"
        />

        <div className="mt-8 space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              onClick={() => toggleAccordion(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
