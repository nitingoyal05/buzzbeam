import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Cards from '../components/Cards';
import Reviews from '../components/Reviews';
import { FaArrowRight, FaPlay } from 'react-icons/fa';

const Home = () => {
  const services = [
    {
      icon: 'https://storage.googleapis.com/a1aa/image/71ADR_bgnyXsMV64dWjFnNTnA3VmfcxCkpWraMpYw7U.jpg',
      title: 'Podcast Editing',
      description: 'Clean, engaging edits that hook your audience and boost retention.',
      accent: 'bg-red-600'
    },
    {
      icon: 'https://storage.googleapis.com/a1aa/image/SSFOwTWclOJTXMOtd-FIZNWWCLRW1puVnE6Jv2_eUSs.jpg',
      title: 'Guest Sourcing',
      description: 'We connect you with high-impact guests to grow authority & visibility.',
      accent: 'bg-black'
    },
    {
      icon: 'https://storage.googleapis.com/a1aa/image/6FmM53QO6s33PfeZ5A4pi_Tgj_7xUIuSa_9QKnVikq8.jpg',
      title: 'Course Creation',
      description: 'From filming to editing—marketing—create and sell premium courses with ease.',
      accent: 'bg-red-600'
    },
    {
      icon: 'https://storage.googleapis.com/a1aa/image/KQCGRlI-OnvZBDUTCQvm2WuFUWpsUYkYMYTUrfIc2as.jpg',
      title: 'Influencer Marketing',
      description: 'Get discovered by thousands—partner with the right voices for your niche.',
      accent: 'bg-black'
    }
  ];

  return (
    <div className="font-roboto bg-white">
      {/* Header */}
      <Navbar />

      {/* Main Content */}
      <main>
        {/* Hero Section - Bold Red & Black */}
        <section className="relative bg-black text-white py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-black to-red-900 opacity-80"></div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-red-500">Scale Your Brand</span><br />
              With Premium Content Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-300">
              From podcast editing to influencer marketing—we're your all-in-one growth partner.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="https://calendly.com/mediabuzzbeam/30min" 
                className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-900/50"
              >
                Get Free Strategy Call
                <FaArrowRight className="ml-2" />
              </Link>
              
            </div>
          </div>
        </section>

        {/* Services Section - Clean White Background */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our <span className="text-red-600">Premium</span> Services
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Everything you need to grow your audience and monetize your content
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className="group relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200"
                >
                  <div className={`absolute top-0 left-0 w-full h-1 ${service.accent}`}></div>
                  <div className="p-6 text-center">
                    <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gray-100 flex items-center justify-center shadow-inner">
                      <img 
                        alt={`${service.title} icon`} 
                        className="w-12 h-12 object-contain" 
                        src={service.icon} 
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <Link 
                      to="/services" 
                      className={`inline-block font-medium hover:underline ${
                        service.accent === 'bg-red-600' ? 'text-red-600 hover:text-red-700' : 'text-black hover:text-gray-800'
                      }`}
                    >
                      Learn more
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cards Component */}
        <Cards />

        {/* Testimonial Section */}
        <Reviews />

      </main>

      {/* Footer */}  
      <Footer />
    </div>
  );
};

export default Home;