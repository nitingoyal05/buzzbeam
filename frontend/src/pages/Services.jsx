import React from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const services = [
  {
    title: "Podcast Editing",
    icon: "🎧",
    description:
      "Polish your audio content with professional editing, noise reduction, music integration, and more.",
    points: [
      "Clean & Crisp Audio",
      "Background Noise Removal",
      "Music & Effects Integration",
      "Timely Delivery",
    ],
  },
  {
    title: "Guest Sourcing",
    icon: "👥",
    description:
      "Find and connect with engaging, niche-relevant podcast guests through end-to-end sourcing support.",
    points: [
      "Niche-Relevant Research",
      "Personalized Outreach",
      "Scheduling & Briefing",
      "End-to-End Communication",
    ],
  },
  {
    title: "Course Creation",
    icon: "📚",
    description:
      "Turn your expertise into structured, sellable courses with help on planning, scripting, and setup.",
    points: [
      "Curriculum Planning",
      "Scriptwriting Assistance",
      "Presentation & Visual Support",
      "Upload & Platform Setup",
    ],
  },
  {
    title: "Influencer Marketing",
    icon: "📢",
    description:
      "Boost your brand through strategic influencer partnerships, from planning to analytics.",
    points: [
      "Influencer Research & Vetting",
      "Campaign Management",
      "Content Review",
      "Analytics & Reporting",
    ],
  },
];

// const Navbar = () => (
//   <nav className="w-full px-6 md:px-20 py-4 bg-white/80 backdrop-blur-md shadow-md fixed top-0 z-50">
//     <div className="max-w-7xl mx-auto flex justify-between items-center">
//       <h1 className="text-2xl font-bold text-indigo-700">My Portfolio</h1>
//       <ul className="flex gap-6 text-gray-700 font-medium">
//         <li><a href="#services" className="hover:text-indigo-500">Services</a></li>
//         <li><a href="#about" className="hover:text-indigo-500">About</a></li>
//         <li><a href="#contact" className="hover:text-indigo-500">Contact</a></li>
//       </ul>
//     </div>
//   </nav>
// );



const Services = () => {
  return (
    <>
      <Navbar />
      <section id="services" className="relative pt-32 pb-20 px-6 md:px-20 overflow-hidden bg-gradient-to-br from-[#f8f9fc] to-[#e0e7ff]">
        {/* Animated Blobs */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-[-50px] left-[-50px] w-96 h-96 bg-purple-400 opacity-40 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/3 right-[-60px] w-96 h-96 bg-pink-400 opacity-40 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute bottom-[-60px] left-1/2 transform -translate-x-1/2 w-96 h-96 bg-blue-400 opacity-40 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            className="text-5xl font-extrabold mb-6 text-gray-800"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            🚀 Our Services
          </motion.h2>
          <motion.p
            className="text-gray-700 mb-12 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Ready to amplify your presence? Explore the services that bring your creative and business goals to life.
          </motion.p>
          <div className="grid gap-10 grid-cols-1 md:grid-cols-2">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white/80 backdrop-blur-lg p-8 rounded-3xl shadow-2xl hover:scale-105 transform transition duration-300 border border-gray-100"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-3xl font-bold text-blue-900 mb-3">
                  {service.icon} {service.title}
                </h3>
                <p className="text-gray-700 mb-5 leading-relaxed">{service.description}</p>
                <ul className="list-disc pl-6 text-left text-gray-600 space-y-1">
                  {service.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <a
              href="#contact"
              className="inline-block bg-red-500 text-white px-8 py-4 rounded-full text-xl font-semibold shadow-md hover:shadow-xl hover:scale-105 transition"
            >
              Let’s Work Together →
            </a>
          </motion.div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Services;