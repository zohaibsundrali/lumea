"use client";
import React, { useState } from "react";
import Image from "next/image";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0); // default first one open

  const faqs = [
    {
      question: "What services do you provide?",
      answer:
        "We provide web development, mobile apps, UI/UX design, and cloud solutions.",
    },
    {
      question: "How can I contact support?",
      answer:
        "You can reach our support team through the contact form or by emailing support@example.com.",
    },
    {
      question: "Do you offer custom solutions?",
      answer:
        "Yes, we specialize in building custom solutions tailored to client needs.",
    },
    {
      question: "What is your pricing model?",
      answer:
        "Our pricing depends on project requirements. We offer hourly as well as fixed-price models.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(index === openIndex ? null : index); // only one open at a time
  };

  return (
    <div className="w-full py-10">
      <div className="w-[80%] ml-auto flex">
        {/* Left Section */}
        <div className="w-[40%] pr-8">
          <h1 className="text-[37px] text-black font-bold">
            Frequently Asked Questions
          </h1>
          <div className="w-[90px] h-[3px] bg-[#d9326f] my-3"></div>
          <p className="mb-5 text-[15px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
            aliquam, nisi delectus amet laborum, inventore eaque perspiciatis
            eligendi consequatur iure maxime iste voluptatibus perferendis
            ipsum.
          </p>

          {/* Accordion */}
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-lg overflow-hidden shadow-md"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className={`w-full flex items-center justify-between px-5 py-3 font-medium transition ${
                    openIndex === index
                      ? "bg-[#d9326f] text-white"
                      : "bg-[#ce8aa3] text-black"
                  }`}
                >
                  <span>{faq.question}</span>
                  <span className="ml-2">
                    {openIndex === index ? "▼" : "▶"}
                  </span>
                </button>

                {openIndex === index && (
                  <div className="px-5 py-3 bg-white text-gray-700">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="w-[60%]">
          <div className="w-full h-full relative">
            <Image
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
              alt="Laptop"
              fill
              className="object-cover rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
