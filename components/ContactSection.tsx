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
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";

export default function ContactSection() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
  };

  return (
    <section className="w-full py-20 px-4 bg-gray-50 flex items-center justify-center min-h-screen font-sans">
      <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-[40%_60%] shadow-2xl rounded-2xl overflow-hidden bg-white">
        <div className="flex flex-col justify-start  sm:p-12 lg:p-16 text-black relative overflow-hidden h-full">
          <div className="relative z-10 space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-4 relative inline-block">
                Get In Touch !!
                <span className="absolute bottom-0 left-0 w-1/2 h-[2px] bg-black rounded-full"></span>
              </h3>
              <p className="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus luctus nec.
              </p>
            </div>

            <div className="space-y-8">
              {/* Phone Item */}
              <div className="flex items-start gap-4 group">
                <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center text-black group-hover:bg-black group-hover:text-white transition-all duration-300 shadow-lg backdrop-blur-sm">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs">Phone</p>
                  <h4 className="text-lg font-bold">(+654) 6478909</h4>
                </div>
              </div>

              {/* Email Item */}
              <div className="flex items-start gap-4 group">
                <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center text-black group-hover:bg-black group-hover:text-white transition-all duration-300 shadow-lg backdrop-blur-sm">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs">E-mail</p>
                  <h4 className="text-lg font-bold">mail@pckga.id</h4>
                </div>
              </div>

              {/* Address Item */}
              <div className="flex items-start gap-4 group">
                <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center text-black group-hover:bg-black group-hover:text-white transition-all duration-300 shadow-lg backdrop-blur-sm">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs">Location</p>
                  <h4 className="text-lg font-bold">London Eye, London</h4>
                </div>
              </div>
            </div>
            {/* Social Icons */}
            <div className="pt-6">
              <p className="text-xs mb-3">Follow Us</p>

              <div className="flex gap-4">
                <a
                  href="#"
                  aria-label="Facebook"
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/10 text-black shadow-lg transition-all duration-300 hover:bg-black hover:text-white hover:-translate-y-1"
                >
                  <Facebook size={18} />
                </a>

                <a
                  href="#"
                  aria-label="Twitter"
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/10 text-black shadow-lg transition-all duration-300 hover:bg-black hover:text-white hover:-translate-y-1"
                >
                  <Twitter size={18} />
                </a>

                <a
                  href="#"
                  aria-label="Instagram"
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/10 text-black shadow-lg transition-all duration-300 hover:bg-black hover:text-white hover:-translate-y-1"
                >
                  <Instagram size={18} />
                </a>
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
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                  <User size={18} />
                </div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-1 focus:ring-black focus:border-transparent block pl-10 p-4 outline-none transition-all placeholder-gray-400"
                  required
                />
              </div>

              {/* Name Input */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                  <Mail size={18} />
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-1 focus:ring-black focus:border-transparent block pl-10 p-4 outline-none transition-all placeholder-gray-400"
                  required
                />
              </div>
            </div>

            {/* Phone Input */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                <Smartphone size={18} />
              </div>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Your Phone"
                className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-1 focus:ring-black focus:border-transparent block pl-10 p-4 outline-none transition-all placeholder-gray-400"
              />
            </div>

            {/* Message Textarea */}
            <div className="relative">
              <div className="absolute top-4 left-3 flex items-start pointer-events-none text-gray-500">
                <MessageSquare size={18} />
              </div>
              <textarea
                id="message"
                name="message"
                rows={6}
                placeholder="Your Message"
                className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-1 focus:ring-black focus:border-transparent block pl-10 p-4 outline-none transition-all resize-none placeholder-gray-400"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full sm:w-auto text-white cursor-pointer bg-black hover:bg-black/80  font-bold rounded-lg text-sm px-10 py-4 text-center inline-flex items-center justify-center gap-2 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-1"
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
