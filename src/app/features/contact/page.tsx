"use client";

import React, { useState } from "react";
import { Phone, MapPin, Mail } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitting:", formData);
  };

  return (
    <div className="w-full bg-[#f8fafc] min-h-screen font-sans antialiased pb-24">
      {/* 1. Orange Hero Header Section */}
      <div className="w-full bg-[#f28705] text-white pt-24 pb-40 px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-2">
          <p className="text-sm font-medium tracking-wide text-white/90">
            Need our help?
          </p>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            Let&apos;s discuss your case and how can we help you
          </h1>
        </div>
      </div>

      {/* 2. Main Overlapping Workspace Card Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 relative z-10">
        <div className="bg-white rounded-[32px] shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch">
          
          {/* Left Side: Input Form Column */}
          <div className="p-8 sm:p-12 lg:p-16 lg:col-span-7 flex flex-col justify-between space-y-10">
            <div className="space-y-3">
              <h2 className="text-4xl font-bold text-[#0c111d]">
                Get in <span className="text-[#f28705]">Touch</span>
              </h2>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-xl">
                Connect with us to learn more, collaborate, or support our mission for inclusive development.
              </p>
            </div>

            {/* Input Form Section */}
            <form onSubmit={handleSubmit} className="space-y-4 w-full">
              <div>
                <label className="block text-xs font-semibold text-gray-400 mb-1">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-white border border-gray-200 focus:border-[#f28705] rounded-lg px-4 py-3 text-sm outline-none transition-colors text-gray-800"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-400 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-white border border-gray-200 focus:border-[#f28705] rounded-lg px-4 py-3 text-sm outline-none transition-colors text-gray-800"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-400 mb-1">
                  Phone number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-white border border-gray-200 focus:border-[#f28705] rounded-lg px-4 py-3 text-sm outline-none transition-colors text-gray-800"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-400 mb-1">
                  Write a message...
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-white border border-gray-200 focus:border-[#f28705] rounded-lg px-4 py-3 text-sm outline-none transition-colors text-gray-800 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#f28705] hover:bg-[#d67604] text-white text-xs font-bold uppercase tracking-wider py-3.5 rounded-lg transition-colors shadow-sm mt-2"
              >
                Send
              </button>
            </form>

            {/* Bottom Info Channels Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-gray-100 w-full text-xs">
              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-gray-700 flex-shrink-0" />
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Phone</span>
                  <a href="tel:+977-01-4793791" className="font-medium text-[#f28705] hover:underline whitespace-nowrap">
                    +977-01-4793791
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-2.5">
                <MapPin className="w-4 h-4 text-gray-700 flex-shrink-0" />
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Location</span>
                  <span className="font-medium text-[#f28705]">Kathmandu, Nepal</span>
                </div>
              </div>

              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-gray-700 flex-shrink-0" />
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Email</span>
                  <a href="mailto:hidrnepal@gmail.com" className="font-medium text-[#f28705] hover:underline break-all">
                    hidrnepal@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Dark Map Container Column */}
          <div className="bg-[#1a2d3d] lg:col-span-5 relative min-h-[400px] lg:min-h-full flex items-center justify-center p-6 sm:p-10">
            <div className="w-full h-full min-h-[320px] bg-white rounded-2xl shadow-lg overflow-hidden border-4 border-white relative z-20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113032.25146039578!2d85.25609252328224!3d27.70895425219985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baab7%3A0x84e583d10c464231!2sKathmandu%2044600!5e0!3m2!1sen!2snp!4v1716812345678!5m2!1sen!2snp"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="HIDR Nepal Office Location"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}