import React from 'react';
import { motion } from 'framer-motion';

const Cards = () => {
  const mentors = [
    {
      name: "The Real One",
      title: "1.35M+ Subscribers",
      image: "section1.jpg",
      bgColor: "bg-yellow-500"
    },
    {
      name: "Chintamani Skt",
      title: "194k+ Subscribers",
      image: "section13.jpg",
      bgColor: "bg-blue-500"
    },
    {
      name: "Win Win World",
      title: "145k+ Subscribers",
      image: "section14.jpg",
      bgColor: "bg-orange-300"
    },
    {
      name: "Anchal Rajkumar",
      title: "16.4k+ Subscribers",
      image: "section15.jpg",
      bgColor: "bg-green-400"
    },
    {
      name: "Tarun Bindlish",
      title: "38.5k+ Subscribers",
      image: "section16.jpg",
      bgColor: "bg-red-400"
    },
    {
      name: "Shruti Tadra",
      title: "8.89k+ Subscribers",
      image: "section17.jpg",
      bgColor: "bg-orange-200"
    }
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Mentors Section */}
      <div className="text-center py-10">
        <h1 className="text-4xl font-bold">
          Who we <span className="text-yellow-500">Working with</span>
        </h1>
      </div>

      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {mentors.map((mentor, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`${mentor.bgColor} rounded-lg p-6 text-center shadow-lg hover:scale-105 transform transition-transform`}
          >
            <img 
              alt={mentor.name} 
              className="mx-auto rounded-full mb-4 h-[150px] w-[150px] object-cover" 
              src={mentor.image}
            />
            <h2 className="text-xl font-bold">{mentor.name}</h2>
            <p className="text-black bg-black text-white rounded-full px-4 py-2 inline-block mt-2">
              {mentor.title}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
