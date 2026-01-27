"use client";
import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  User,
  Smartphone,
  MessageSquare,
} from "lucide-react";

export default function ContactSection() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
  };

  return (
    <section className="w-full py-20 px-4 bg-gray-50 flex items-center justify-center min-h-screen font-sans">
      <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-[30%_70%] shadow-2xl rounded-2xl overflow-hidden bg-white">
        {/* Left Column - Contact Info (30% width) */}
        {/* Using a distinct background color to visually separate the 30% area */}
        <div className="bg-[#1a237e] p-10 flex flex-col justify-center text-white relative overflow-hidden h-full">
          {/* Decorative background elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-4 relative inline-block">
                Get In Touch !!
                <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-blue-400 rounded-full"></span>
              </h3>
              <p className="text-blue-100 text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus luctus nec.
              </p>
            </div>

            <div className="space-y-8">
              {/* Phone Item */}
              <div className="flex items-start gap-4 group">
                <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center text-blue-300 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-lg backdrop-blur-sm">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">
                    (+654) 6478909
                  </h4>
                  <p className="text-xs text-blue-200">
                    Lorem ipsum dolor sit.
                  </p>
                </div>
              </div>

              {/* Email Item */}
              <div className="flex items-start gap-4 group">
                <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center text-blue-300 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-lg backdrop-blur-sm">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">
                    mail@pckga.id
                  </h4>
                  <p className="text-xs text-blue-200">
                    Lorem ipsum dolor sit.
                  </p>
                </div>
              </div>

              {/* Address Item */}
              <div className="flex items-start gap-4 group">
                <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center text-blue-300 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-lg backdrop-blur-sm">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">
                    London Eye, London
                  </h4>
                  <p className="text-xs text-blue-200">
                    Lorem ipsum dolor sit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Form (70% width) */}
        <div className="bg-white p-8 sm:p-12 lg:p-16 flex flex-col justify-center h-full">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Send us a Message
            </h2>
            <p className="text-gray-500">
              We will get back to you as soon as possible.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Email Input */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                  <Mail size={18} />
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent block pl-10 p-4 outline-none transition-all placeholder-gray-400"
                  required
                />
              </div>

              {/* Name Input */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                  <User size={18} />
                </div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent block pl-10 p-4 outline-none transition-all placeholder-gray-400"
                  required
                />
              </div>
            </div>

            {/* Phone Input */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                <Smartphone size={18} />
              </div>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Your Phone"
                className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent block pl-10 p-4 outline-none transition-all placeholder-gray-400"
              />
            </div>

            {/* Message Textarea */}
            <div className="relative">
              <div className="absolute top-4 left-3 flex items-start pointer-events-none text-gray-400">
                <MessageSquare size={18} />
              </div>
              <textarea
                id="message"
                name="message"
                rows={6}
                placeholder="Your Message"
                className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent block pl-10 p-4 outline-none transition-all resize-none placeholder-gray-400"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full sm:w-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-bold rounded-lg text-sm px-10 py-4 text-center inline-flex items-center justify-center gap-2 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                Submit Button
                <Send size={18} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
