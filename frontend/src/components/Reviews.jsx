import React from 'react';
import { FaStar } from 'react-icons/fa';

const Reviews = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Tejander',
      role : 'Podcast Editing Service',
      rating: 5,
      content: '"“Working with Buzzbeam Media has been a game-changer for our podcast. Their team took our raw recordings and turned them into clean, engaging episodes with sharp editing, subtitles, and professional visuals. Their turnaround time is fast, and the quality is consistent. I can finally focus on content while they handle everything post-production. Highly recommend them to any serious podcaster!”"',
      avatar: 'reviews11.jpg'
    },
    {
      id: 2,
      name: 'Tarun Bindlish',
      role: 'Guest Sourcing for YouTube Channel',
      rating: 4,
      content: '“Buzzbeam helped us get in touch with incredible guests that we wouldn’t have reached on our own. Their guest sourcing service is super efficient — they pitched, followed up, and booked creators who aligned perfectly with our audience. We have seen a clear spike in engagement since we started bringing in better names on the channel. Its like having an extended team working behind the scenes!”',
      avatar: 'section16.jpg'
    },
    {
      id: 3,
      name: 'Shitij Kalia',
      role: 'Course Creation',
      rating: 5,
      content: '"The course creation team helped us package our knowledge into a premium product that now generates six figures annually. Worth every penny!"',
      avatar: 'error.jpg'
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Creator <span className="text-red-600">Success</span> Stories
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from creators who've transformed their content with our services
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-black text-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-red-600 mr-1" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;