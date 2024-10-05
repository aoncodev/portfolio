"use client";

import React, { useState } from "react";

// Replace the environment variables with actual values or pass them from server-side
const TELEGRAM_API = "7840355159:AAEebEj5IUbdADfXI6-6Alp52icC-EIy8eY";
const CHAT_ID = "-4528528047";

const sendToTelegram = (name, email, message) => {
  const text = `New message from your website:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`;

  fetch(`https://api.telegram.org/bot${TELEGRAM_API}/sendMessage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text: text,
    }),
  });
};

export default function Contacts({ isDarkMode }) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send data to Telegram
    sendToTelegram(formData.name, formData.email, formData.message);
    setIsSubmitted(true);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (isSubmitted) {
    return (
      <div className="max-w-3xl mx-auto space-y-6">
        <div
          className={`p-8 rounded-2xl shadow-lg text-center ${
            isDarkMode ? "bg-[#1c1c1e] text-white" : "bg-white text-black"
          }`}
        >
          <div className="mb-6">
            <svg
              className="mx-auto h-16 w-16 text-green-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h2 className="text-3xl font-semibold mb-4">Thank You</h2>
          <p
            className={`text-lg ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Your message has been received. I'll get back to you soon.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <p className="text-xl leading-relaxed text-center">
        Let's create something amazing together. Reach out and let's start a
        conversation about your next big idea.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className={`block text-sm font-medium mb-1 ${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-2 rounded-lg border ${
              isDarkMode
                ? "border-[#4a4a4a] bg-[#333333] text-white"
                : "border-gray-300"
            } focus:ring-1 focus:ring-[#020021] focus:border-transparent transition`}
            required
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className={`block text-sm font-medium mb-1 ${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-2 rounded-lg border ${
              isDarkMode
                ? "border-[#4a4a4a] bg-[#333333] text-white"
                : "border-gray-300"
            } focus:ring-1 focus:ring-[#020021] focus:border-transparent transition`}
            required
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className={`block text-sm font-medium mb-1 ${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className={`w-full px-4 py-2 rounded-lg border ${
              isDarkMode
                ? "border-[#4a4a4a] bg-[#333333] text-white"
                : "border-gray-300"
            } focus:ring-1 focus:ring-[#020021] focus:border-transparent transition`}
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className={`w-full text-white font-medium py-2 px-4 rounded-lg transition-colors ${
            isDarkMode
              ? "bg-[#0E7AFE] hover:bg-opacity-80"
              : "bg-[#0E7AFE] hover:bg-opacity-80"
          }`}
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
