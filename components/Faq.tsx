"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

/**
 * Data extracted from the provided HTML snippet
 */
const faqData = [
  {
    question: "What type of products do you offer?",
    answer: (
      <p>
        We offer premium customized products such as{" "}
        <a
          href="https://www.thebaxsaaco.com/rigid-boxes"
          className="text-red-700 font-medium hover:underline"
        >
          Rigid Boxes
        </a>
        ,{" "}
        <a
          href="https://www.thebaxsaaco.com/corrugated-boxes"
          className="text-red-700 font-medium hover:underline"
        >
          Corrugated Boxes
        </a>
        ,{" "}
        <a
          href="https://www.thebaxsaaco.com/paper-bags"
          className="text-red-700 font-medium hover:underline"
        >
          Paper Bags
        </a>
        , Carton Packaging,{" "}
        <a
          href="https://www.thebaxsaaco.com/product-boxes"
          className="text-red-700 font-medium hover:underline"
        >
          Product Boxes
        </a>
        .
        <br />
        We also offer Custom Packaging Solutions, Creative and Innovative
        Packaging and Cost Effective Packaging.
      </p>
    ),
  },
  {
    question: "What's the MOQ at The Baxsa Co.?",
    answer:
      "We don't have a Minimum Order Quantity (MOQ). Instead, we focus on a Minimum Order Value (MOV) of INR 1.8 lakhs. This helps us tailor our services more flexibly to meet your needs.",
  },
  {
    question: "What exactly is MOV?",
    answer:
      "MOV stands for Minimum Order Value. For us, it's set at INR 1.8 lakhs, ensuring every order reaches or surpasses this value before we start the magic.",
  },
  {
    question: "Is the sample pack included in the free shipping policy?",
    answer:
      "Absolutely! We offer free shipping on most of our products, including sample packs. Do reach out if you have questions about specific conditions or restrictions.",
  },
  {
    question: "How much time does it take to complete my order?",
    answer: (
      <div className="space-y-2">
        <p>Quality takes time! Here's a breakdown:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <strong>Design from Scratch:</strong> Typically 7 working days.
          </li>
          <li>
            <strong>Sample Confirmation:</strong> After getting our sample,
            you've 4-5 working days to suggest changes.
          </li>
          <li>
            <strong>Final Production:</strong> Around 10-15 working days
            post-sample confirmation.
          </li>
          <li>
            <strong>Order Dispatch:</strong> After production, dispatching takes
            about 2-6 working days.
          </li>
        </ul>
      </div>
    ),
  },
  {
    question: "How does the warehousing facility work?",
    answer:
      "We offer a temporary storage solution for up to five working days for single orders. For extended periods, you can avail of our warehousing scheme, but be sure to inform us beforehand and clear the payment upfront.",
  },
  {
    question: "Can I get my order on the double?",
    answer: (
      <p>
        We do cater to rush orders depending on our capacity. Please consult
        with our{" "}
        <a
          href="https://www.thebaxsaaco.com/contact-us"
          className="text-red-700 font-medium hover:underline"
        >
          Packaging Specialist
        </a>{" "}
        to get clarity on this.
      </p>
    ),
  },
  {
    question: "Can I tweak my order post approval?",
    answer: (
      <p>
        Before final approval, certainly! Contact your Packaging Specialist on{" "}
        <a
          href="tel:+919820772727"
          className="text-red-700 font-medium hover:underline"
        >
          +91 98207 72727
        </a>{" "}
        to adjust order details. However, once it moves to production, changes
        are not possible.
      </p>
    ),
  },
  {
    question: "How do I get a quote?",
    answer: (
      <p>
        Simple! Fill out our contact form on{" "}
        <a
          href="https://www.thebaxsaaco.com/contact-us"
          className="text-red-700 font-medium hover:underline"
        >
          thebaxsaaco.com/contact-us
        </a>{" "}
        and a packaging specialist will be in touch.
      </p>
    ),
  },
  {
    question: "How will I know about my shipping details?",
    answer:
      "Once your order is dispatched, we'll send over all tracking information. Our team also monitors the shipment to ensure it reaches you smoothly.",
  },
];

const AccordionItem = ({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string;
  answer: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <div className="border-b border-gray-200 overflow-hidden">
      <button
        onClick={onClick}
        className="w-full py-6 flex justify-between cursor-pointer items-center text-left hover:bg-gray-50 transition-colors duration-200 group"
        aria-expanded={isOpen}
      >
        <span
          className={`text-lg md:text-xl font-normal transition-colors duration-200 ${isOpen ? "text-black" : "text-gray-800"}`}
        >
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="ml-4 flex-shrink-0"
        >
          <ChevronDown
            className={`w-5 h-5 ${isOpen ? "text-black" : "text-gray-400"}`}
          />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="pb-6 pr-12 text-gray-600 leading-relaxed text-base md:text-lg">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default as per image data-state

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Centered Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <div className="mt-4 w-20 h-1 bg-red-700 mx-auto rounded-full opacity-80"></div>
        </div>

        {/* FAQ List */}
        <div className="border-t border-gray-200">
          {faqData.map((item, index) => (
            <AccordionItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onClick={() => toggleAccordion(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
