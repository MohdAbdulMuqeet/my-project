"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQSection = () => {
  // store multiple open items instead of one
  const [openIndexes, setOpenIndexes] = useState([]);

  const faqData = [
    {
      question:
        "How is AI Fiesta different from subscribing to each AI separately?",
      answer:
        "AI Fiesta brings together the world's most powerful AI models — Grok 4, ChatGPT 5, Gemini 2.5 Pro, DeepSeek, Claude Sonnet 4, and Perplexity Sonar Pro — in one place. Instead of juggling multiple subscriptions and browser tabs, you get all answers side-by-side in a single chat window, plus exclusive features like Prompt Enhancer and Custom Projects.",
    },
    {
      question: "Can I choose which AI models to use?",
      answer:
        "Yes! You can toggle AI models on or off at any time during your chat and turn them back on later without losing your chat history.",
    },
    {
      question: "Do I get unlimited messages?",
      answer:
        "You get 3,000,000 tokens per month with your subscription. Each token is approximately ¾ of a word. For most users, this is far more than needed — the average usage is around 200,000 tokens per month. Standard models consume tokens at 1x rate whereas Premium models consume tokens at 4x rate.",
    },
    {
      question: "What happens if I run out of tokens?",
      answer:
        "3 million tokens is a very large allowance, and 99% of users never come close to exhausting it. You'll see warnings before hitting zero. That said, if you reach that limit, please reach out to us at Support to get more tokens on paid basis.",
    },
    {
      question: "Do you offer refunds?",
      answer:
        "No. All payments are non-refundable, regardless of usage. You may cancel any time to stop future billing (see our Terms & Conditions).",
    },
    {
      question: "How can I manage or cancel my subscription?",
      answer:
        "Log in to AI Fiesta, go to Settings, and select your subscription management option.",
    },
    {
      question: "Where can I access the Community and the Promptbook?",
      answer:
        "You can log in at community.aifiesta.ai using your registered email. Please note: this feature is only available to paid users.",
    },
    {
      question: "Can I use AI Fiesta on my phone?",
      answer:
        "Yes! You can use AI Fiesta in your mobile browser at chat.aifiesta.ai or install our dedicated apps — Android and iOS — to access the platform anytime, anywhere.",
    },
    {
      question: "Will I get free upgrades when new AI versions are released?",
      answer:
        "Yes! If ChatGPT releases Model 6 or another AI provider launches a higher version, you will get access at no extra cost.",
    },
  ];

  const toggleFaq = (index) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  return (
    <div className="min-h-screen mt-20 mb-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-12 drop-shadow-lg">
          Frequently Asked Questions (FAQs)
        </h1>
        <div className="bg-black/70 rounded-2xl shadow-2xl mt-12 overflow-hidden w-full p-6">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="border-b last:border-b-0 border-gray-700"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-10 py-8 text-left flex items-center justify-between transition-all duration-300"
              >
                <span className="text-xl md:text-2xl font-semibold text-white pr-4 leading-relaxed">
                  {faq.question}
                </span>
                <div
                  className={`flex-shrink-0 transition-transform duration-300 ${
                    openIndexes.includes(index) ? "rotate-180" : ""
                  }`}
                >
                  <ChevronDown className="w-7 h-7 text-gray-200" />
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndexes.includes(index)
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-10 py-6">
                  <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
