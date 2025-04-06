import React from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";  



const AboutUs = () => {
  return (
    <>
      <Navbar />
      <section
        id="about"
        className="min-h-screen bg-gradient-to-br from-white via-gray-100 to-white text-gray-900 py-32 px-6 md:px-20"
      >
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-extrabold mb-6 text-black"
          >
            About Us
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-lg mb-10 leading-relaxed text-gray-800"
          >
            <span className="text-red-500 font-semibold">Buzzbeam Media</span> is a creative agency dedicated to helping brands, entrepreneurs,
            and content creators grow through expert media and marketing services. We specialize
            in podcast editing to deliver high-quality, engaging audio content, and offer guest
            sourcing to connect you with the right voices that add value to your platform. Our
            course creation service helps you turn your knowledge into structured, impactful online
            programs, while our influencer marketing solutions connect you with trusted voices to
            expand your reach and drive results. Whether you're building a personal brand or scaling
            your business, <span className="text-red-500 font-semibold">Buzzbeam Media</span> provides the tools and talent to elevate your presence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-left bg-white border border-red-200 p-8 rounded-2xl shadow-2xl"
          >
            <h3 className="text-2xl font-semibold text-red-600 mb-4">
              Contact Information
            </h3>
            <p className="mb-2">
              <strong>Phone:</strong> +91-8894947990
            </p>
            <p className="mb-6">
              <strong>Email:</strong> mediabuzzbeam@gmail.com
            </p>

            <div className="flex flex-wrap justify-center gap-6 mt-4">
              <a
                href="https://wa.me/+918894947990"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-red-500 text-white rounded-full hover:bg-red-600 shadow-md hover:scale-105 transition-transform"
              >
                <FaWhatsapp size={20} /> WhatsApp
              </a>

              <a
                href="https://www.instagram.com/buzzbeamindia?igsh=MXBpbGtnM2lkY2U3ZA=="
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full hover:bg-red-600 shadow-md hover:scale-105 transition-transform"
              >
                <FaInstagram size={20} /> Instagram
              </a>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AboutUs;
